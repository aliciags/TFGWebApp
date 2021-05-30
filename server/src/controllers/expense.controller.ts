import { Response } from "express";

import HttpStatusCodes from "http-status-codes";

import Request from "../types/Request";
import Expense, { IExpense } from "../models/Expense";


export const getAllExpenses = async ( req: Request, res: Response ) => {

    const role: string = req.role;
    if (role !== "admin") {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: "Access denied"});
    }

    try {
        const expenses: IExpense[] = await Expense.find();
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getUserExpenses = async ( req: Request, res: Response ) => {

    try {
        const expenses: IExpense[] = await Expense.find({_user: req.params.uid});
        if (!expenses) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "There are no expenses for such user"});
        }
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getExpense = async ( req: Request, res: Response ) => {

    try {
        const expense: IExpense = await Expense.findById({_id: req.params.eid});
        if (!expense) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: "Expense not found"});
        }
        res.json(expense);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a expense object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const addExpense = async ( req: Request, res: Response ) => {

    const { _user, ingredients, expense } = req.body;
    // calculate estimated expense
    const expenseFields = {
        _user,
        date: Date.now(),
        ingredients,
        expense,
        // estExpense
    };
    try {
        const expense: IExpense = new Expense(expenseFields);
        await expense.save();
        res.json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const editExpense = async ( req: Request, res: Response ) => {

    const { date, ingredients, expense } = req.body;
    const expenseFields = {
        date,
        ingredients,
        expense
    };
    try {
        let expense: IExpense = await Expense.findById({_id: req.params.eid});
        if (!expense) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "Expense does not exist"});
        }
        expense = await Expense.findByIdAndUpdate(
            { _id: req.params.eid },
            { $set: expenseFields },
            { new: true, runValidators: true }
        );
        res.json(expense);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a expense object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const deleteExpense = async ( req: Request, res: Response ) => {

    try {
        const expense: IExpense = await Expense.findByIdAndDelete({_id: req.params.eid});
        if (!expense) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "Expense does not exist"});
        }
        res.json({msg: "expense removed", e: expense});
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a expense object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};