import { Response } from 'express';

import HttpStatusCodes from 'http-status-codes';

import Request from '../types/Request';
import Expense, { IExpense } from '../models/Expense';


export const getAllExpenses = async ( req: Request, res: Response ) => {

    const role: string = req.role;
    if (role !== 'admin') {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: 'Access denied'});
    }

    let expenses: IExpense[];

    try {
        expenses = await Expense.find();
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(expenses);
};

export const getUserExpenses = async ( req: Request, res: Response ) => {

    let expenses: IExpense[];

    try {
        expenses = await Expense.find({_user: req.params.uid});
        if (!expenses) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'There are no expenses for such user'});
        }
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(expenses);
};

export const getExpense = async ( req: Request, res: Response ) => {

    let expense: IExpense;

    try {
        expense = await Expense.findById({_id: req.params.eid});
        if (!expense) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: 'Expense not found'});
        }
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a expense object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(expense);
};

export const addExpense = async ( req: Request, res: Response ) => {

    const { _user, ingredients, expense, date } = req.body;
    // calculate estimated expense
    const expenseFields = {
        _user,
        date: date,
        ingredients,
        expense,
        // estExpense
    };

    if ( !expenseFields.date ) {
        expenseFields.date = Date.now();
    }

    let exp: IExpense;
    try {
        exp = new Expense(expenseFields);
        await exp.save();
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(exp);
};

export const editExpense = async ( req: Request, res: Response ) => {

    const { date, ingredients, expense } = req.body;
    const expenseFields = {
        date,
        ingredients,
        expense
    };
    let exp: IExpense;
    try {
        exp = await Expense.findById({_id: req.params.eid});
        if (!exp) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'Expense does not exist'});
        }
        exp = await Expense.findByIdAndUpdate(
            { _id: req.params.eid },
            { $set: expenseFields },
            { new: true, runValidators: true }
        );
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a expense object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(exp);
};

export const deleteExpense = async ( req: Request, res: Response ) => {

    let expense: IExpense;
    try {
        expense = await Expense.findByIdAndDelete({_id: req.params.eid});
        if (!expense) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'Expense does not exist'});
        }
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a expense object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json({msg: 'expense removed', e: expense});
};