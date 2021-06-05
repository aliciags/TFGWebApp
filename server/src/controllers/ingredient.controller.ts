import { Response } from 'express';

import { check, validationResult } from 'express-validator/check';
import HttpStatusCodes from 'http-status-codes';

import Request from '../types/Request';
import Ingredient, { IIngredient } from '../models/Ingredient';


export const getAllIngredients = async( req: Request, res: Response) => {

    const role: string = req.role;
    if (role !== 'admin') {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: 'Access denied'});
    }

    try {
        const ingredients: IIngredient[] = await Ingredient.find();
        res.json(ingredients);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getIngredient = async (req: Request, res: Response) => {

    try {
        const ingredient: IIngredient = await Ingredient.findOne({name: req.params.iid});
        if (ingredient) {
            return res.json(ingredient);
        }
        res.status(HttpStatusCodes.NOT_FOUND).json({msg: 'Ingredient not found'});
    } catch (err) {
        console.error(err.message);
        // if( err.kind === 'ObjectId') {
        // return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not an ingredient object id'});}
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getFilterIngredient = async (req: Request, res: Response) => {

    const { name } = req.body;

    try {
        const ingredients: IIngredient[] = await Ingredient.find({name: {$regex: name, $options: 'i'}});
        res.json(ingredients);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const addIngredient = async (req: Request, res: Response) => {

    const role: string = req.role;
    if (role !== 'admin') {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: 'Access denied'});
    }

    const { name, diet, avgPrice } = req.body;
    try {
        let ingredient: IIngredient = await Ingredient.findOne({name: name});
        if (ingredient) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'Ingredient already exists'});
        }

        const ingredientFields = {
            name,
            diet,
            avgPrice
        };

        ingredient = new Ingredient(ingredientFields);
        await ingredient.save();
        res.json(ingredient);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const editIngredient = async (req: Request, res: Response) => {

    const role: string = req.role;
    if (role !== 'admin') {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: 'Access denied'});
    }

    const name = req.params.iid;
    const { diet, averagePrice } = req.body;
    try {
        let ingredient: IIngredient = await Ingredient.findOne({name: name});
        if (!ingredient) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'Ingredient does not exist'});
        }

        const ingredientFields = {
            diet,
            averagePrice
        };

        ingredient = await Ingredient.findOneAndUpdate(
            {name: name},
            {$set: ingredientFields},
            {new: true, runValidators: true}
        );
        res.json(ingredient);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const deleteIngredient = async (req: Request, res: Response) => {

    const role: string = req.role;
    if (role !== 'admin') {
        return res.status(HttpStatusCodes.FORBIDDEN).json({msg: 'Access denied'});
    }

    try {
        const ingredient: IIngredient = await Ingredient.findOneAndDelete({name: req.params.iid});
        res.json({msg: 'ingredient removed', ing: ingredient});
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};