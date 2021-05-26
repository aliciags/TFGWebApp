import bcrypt from "bcryptjs";
import config from "config";
import { Response } from "express";

import { validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";

import Payload from "../types/Payload";
import Request from "../types/Request";
import User, { IUser } from "../models/User";
//import Mealtime, { IMealtime } from "../models/Day";


export const getAllUsers = async (req: Request, res: Response) => {

    const role: string = req.role;
    //console.log(role);
    if(role !== 'admin') {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: "Access denied", role: role});
    }

    try {
        const users: IUser[] = await User.find();
        res.json(users);
    } catch(err){
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
}

export const getUser = async (req: Request, res: Response) => {

    try {
        const user: IUser = await User.findOne({email: req.params.uid});
        if(user){
            return res.json(user);
        }
        res.status(HttpStatusCodes.NOT_FOUND).json({msg: "user not found"});
    } catch(err){
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
}

export const exists = async (req: Request, res: Response) => {

    try {
        const user: IUser = await User.findOne({email: req.params.uid});
        if(user){
            return res.json({msg: true});
        } else {
            return res.json({msg: false});
        }
    } catch(err){
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
}

export const addUser = async (req: Request, res: Response) => {

    //check if it is a bad request
    const { email, password, firstname, lastname, 
            birthyear, numberMeals, meals, diet,
            recipes, groceries, role } = req.body;
    
    try {
        let user: IUser = await User.findOne({ email : email });
        if(user) {
            res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        // user object based on IUser
        const userFields = {
            role,
            email, 
            password: hashed,
            firstname,
            lastname, 
            birthyear,
            numberMeals, 
            meals, 
            diet,
            recipes, 
            groceries,
        };

        user = new User(userFields);
        const payload: Payload = {
            userId: user.id,
            role: user.role
        };

        await user.save();
        jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: config.get("jwtExpiration") },
            (err, token) => {
                if(err) throw err;
                res.json({token});
            }
        );
    } catch(err){
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
}

export const editUser = async (req: Request, res: Response ) => {

    const email = req.params.uid;
    const {firstname, lastname, birthyear, numberMeals, meals, diet, groceries}  = req.body;
    const userFields = {
        firstname, 
        lastname,
        birthyear,
        numberMeals, 
        meals, 
        diet,
        groceries
    };
    try {
        let user: IUser = await User.findOne({email: email });
        if(!user){
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "user not registered"});
        }

        user = await User.findOneAndUpdate(
            { email: email },
            { $set: userFields},
            { new: true, runValidators: true }   // without it it does not update
        );
        res.json(user);
    } catch(err){
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
}

export const deleteUser = async (req: Request, res: Response ) => {

    try {
        let user: IUser = await User.findOneAndDelete({ email: req.params.uid });
        res.json({msg: "User removed", usr: user});
    } catch(err){
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
}