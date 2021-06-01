import { Response } from "express";

import HttpStatusCodes from "http-status-codes";

import Request from "../types/Request";
import Menu, { IMenu } from "../models/Menu";
import Day, { IDay } from "../models/Day";
import User, { IUser } from "../models/User";
import Mealtime from "../types/Mealtime";

export const getAllMenus = async (req: Request, res: Response ) => {

    const role: string = req.role;
    if (role !== "admin") {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: "Access denied"});
    }

    try {
        const menus: IMenu[] = await Menu.find();
        res.json(menus);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getAllUserMenus = async (req: Request, res: Response ) => {

    try {
        const user: IUser = await User.findOne({email: req.params.uid});
        if (!user) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "user does not exist"});
        }
        const menus: IMenu[] = await Menu.find({_user: user._id});
        if (!menus) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "There are no menus for such user"});
        }
        res.json(menus);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a menu object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getMenu = async ( req: Request, res: Response ) => {

    try {
        const menu: IMenu = await Menu.findById({_id: req.params.mid});
        res.json(menu);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a menu object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const addMenu = async ( req: Request, res: Response ) =>  {

    const { _user, title, description } = req.body;
    try {
        const user: IUser = await User.findOne({email: _user});
        if (!user) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "user does not exist"});
        }
        const menuFields = {
            _user: user._id,
            title,
            description
        };
        let m: IMenu = new Menu(menuFields);
        m = await m.save();
        let i = 0;
        const _menu = m._id;
        const wdays = ["Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday", "Sunday"];
        wdays.forEach(async day => {
            const meals: Mealtime[] = [];
            for (i = 0; i < user.meals.length; i++) {
                const meal: Mealtime = {
                    meal: user.meals[i],
                    recipes: []
                };
                meals.push(meal);
            }

            const dayFields = {
                _menu,
                day,
                meals
            };

            const d: IDay = new Day(dayFields);
            try {
                await d.save();
            } catch (err) {
                console.log(err.message);
            }
        });
        res.json(m);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const editMenu = async ( req: Request, res: Response ) => {

    const { title, description } = req.body;
    try {
        let menu: IMenu = await Menu.findById({_id: req.params.mid});
        if (!menu) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "Menu does not exist"});
        }

        const menuFields = {
            title,
            description
        };
        menu = await Menu.findByIdAndUpdate(
            {_id: req.params.mid},
            {$set: menuFields, runValidators: true},
            {new: true, runValidators: true},
        );
        res.json(menu);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a menu object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const deleteMenu = async ( req: Request, res: Response ) => {

    let i = 0;
    try {
        const delDays: IDay[] = [];
        const days: IDay[] = await Day.find({_menu: req.params.mid});
        for (i = 0; i < days.length; i++) {
            delDays.push(await Day.findByIdAndDelete({_id: days[i]._id}));
        }
        const menu: IMenu = await Menu.findByIdAndDelete({_id: req.params.mid});
        res.json({msg: "menu removed", m: menu, days: delDays});
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a menu object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};