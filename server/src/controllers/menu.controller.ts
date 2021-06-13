import { Response } from 'express';

import HttpStatusCodes from 'http-status-codes';

import Request from '../types/Request';
import Menu, { IMenu } from '../models/Menu';
import Day, { IDay } from '../models/Day';
import User, { IUser } from '../models/User';
import Mealtime from '../types/Mealtime';

export const getAllMenus = async (req: Request, res: Response ) => {

    const role: string = req.role;
    if (role !== 'admin') {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: 'Access denied'});
    }
    let menus: IMenu[];
    try {
        menus = await Menu.find();
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(menus);
};

export const getAllUserMenus = async (req: Request, res: Response ) => {

    let user: IUser;
    let menus: IMenu[];
    try {
        user = await User.findOne({email: req.params.uid});
        if (!user) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'user does not exist'});
        }
        menus = await Menu.find({_user: user._id});
        if (!menus) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'There are no menus for such user'});
        }
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a menu object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(menus);
};

export const getMenu = async ( req: Request, res: Response ) => {

    let menu: IMenu;
    try {
        menu = await Menu.findById({_id: req.params.mid});
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a menu object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(menu);
};

export const addMenu = async ( req: Request, res: Response ) =>  {

    const { _user, title, description } = req.body;
    let { meal } = req.body;
    let m: IMenu;
    try {
        const user: IUser = await User.findOne({email: _user});
        if (!user) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'user does not exist'});
        }
        const menuFields = {
            _user: user._id,
            title,
            description
        };
        m = new Menu(menuFields);
        m = await m.save();
        let i = 0;
        const _menu = m._id;
        const wdays = ['Monday', 'Tuesday', 'Wednesday',
                        'Thursday', 'Friday', 'Saturday', 'Sunday'];
        wdays.forEach(async day => {
            const meals: Mealtime[] = [];
            if (!meal) {
                meal = user.meals;
            }
            for (i = 0; i < meal.length; i++) {
                const m: Mealtime = {
                    meal: meal[i],
                    recipes: []
                };
                meals.push(m);
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
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(m);
};

export const editMenu = async ( req: Request, res: Response ) => {

    const { title, description } = req.body;
    let menu: IMenu;
    try {
        menu = await Menu.findById({_id: req.params.mid});
        if (!menu) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'Menu does not exist'});
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
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a menu object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(menu);
};

export const deleteMenu = async ( req: Request, res: Response ) => {

    const delDays: IDay[] = [];
    let i = 0;
    let menu: IMenu;
    try {
        const days: IDay[] = await Day.find({_menu: req.params.mid});
        for (i = 0; i < days.length; i++) {
            delDays.push(await Day.findByIdAndDelete({_id: days[i]._id}));
        }
        menu = await Menu.findByIdAndDelete({_id: req.params.mid});
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a menu object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json({msg: 'menu removed', m: menu, days: delDays});
};