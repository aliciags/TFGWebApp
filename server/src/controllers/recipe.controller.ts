import { Response } from "express";

import { validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";

import Request from "../types/Request";
import Recipe, { IRecipe } from "../models/Recipe";
import User, { IUser } from "../models/User";
import { Schema } from "mongoose";


export const getAllRecipes = async (req: Request, res: Response) => {

    try {
        const recipes: IRecipe[] = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getFilteredRecipes = async (req: Request, res: Response) => {

    const { diet, meals, ingredients } = req.body;
    let recipes: IRecipe[];

    try {
        if (diet || meals) {
            recipes = await Recipe.find({diet: diet, meal: meals});
            return res.json(recipes);
        }
        if ( ingredients ) {
            recipes = await Recipe.find({ingredients: ingredients});
            return res.json(recipes);
        }
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getRecipe = async (req: Request, res: Response) => {

    try {
        const recipe: IRecipe = await Recipe.findById({_id: req.params.rid});
        if (recipe) {
            return res.json(recipe);
        }
        res.status(HttpStatusCodes.NOT_FOUND).json({msg: "recipe not found"});
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a recipe object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const addRecipe = async (req: Request, res: Response) => {

    const {name, timing, guest, meal, diet, image, ingredients, steps, videoRecipe} = req.body;
    const userID = req.userId;
    try {
        const user: IUser = await User.findById(userID);
        if (!user) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "user not found"});
        }
        const creator: string = user.email;
        const recipeFields = {
            name,
            timing,
            guest,
            meal,
            diet,
            image,
            ingredients,
            steps,
            videoRecipe,
            creator
        };
       // maybe look for similar recipes and suggest them
       const recipe: IRecipe = new Recipe(recipeFields);
       await recipe.save();
       res.json(recipe);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const getUserRecipes = async (req: Request, res: Response) => {

    let i = 0;
    try {
        const user: IUser = await User.findOne({email: req.params.uid});
        if (!user) {
            res.status(HttpStatusCodes.NOT_FOUND).json({msg: "user not found"});
        }
        const recipes: IRecipe[] = [];
        for (i = 0; i < user.recipes.length; i++) {
            recipes.push( await Recipe.findById({_id: user.recipes[i]._id}));
        }
        res.json(recipes);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const editRecipe = async (req: Request, res: Response) => {

    const {name, timing, guest, meal, diet, image, ingredients, steps, videoRecipe} = req.body;
    const recipeFields = {
        name,
        timing,
        guest,
        meal,
        diet,
        image,
        ingredients,
        steps,
        videoRecipe
    };
    try {
        const user: IUser = await User.findById(req.userId);
        if (!user) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: "user not found"});
        }
        let recipe: IRecipe = await Recipe.findById({_id: req.params.rid });
        if (!recipe) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: "recipe not found"});
        }
        if (recipe.creator != user.email) {
            return res.status(HttpStatusCodes.FORBIDDEN).json({msg: "not allowed to edit the recipe"});
        }
        recipe = await Recipe.findByIdAndUpdate(
            {_id: req.params.rid},
            {$set: recipeFields},
            {new: true, runValidators: true}
        );
        res.json(recipe);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a recipe object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};

export const deleteRecipe = async (req: Request, res: Response) => {

    try {
        let recipe: IRecipe = await Recipe.findById({_id: req.params.rid});
        let user: IUser = await User.findOne({email: req.params.uid});
        if (!recipe) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: "recipe not found"});
        }
        if (recipe.creator === user.email && recipe.saved.length > 0) {
            const c = recipe.saved.pop();
            recipe = await Recipe.findByIdAndUpdate(
                {_id: recipe._id},
                {update: {creator: c, saved: recipe.saved}},
                {new: true}
            );
        } else if (recipe.creator == user.email) {
            recipe = await Recipe.findByIdAndDelete({_id: req.params.rid});
        } else if (recipe.saved.length > 0 ) {
            const userDeleting = recipe.saved.filter(x => x ===  req.params.uid)[0];
            const index = recipe.saved.indexOf(userDeleting, 0);
            if ( index > -1) {
                 recipe.saved.splice(index, 1);
            }
            /*const updatedUsers: IUser["email"][] = [];
            let i = 0;
            for (i = 0; i < recipe.saved.length; i++) {
                if (recipe.saved[i] != req.params.uid) {
                    updatedUsers.push(recipe.saved[i]);
                }
            }*/
            recipe = await Recipe.findByIdAndUpdate(
                {_id: recipe._id},
                {update: recipe},
                {new: true}
            );
        } else {
            return res.json({msg: "recipe not removed"});
        }

        /*let j = 0;
        const updatedRecipes: Schema.Types.ObjectId[] = [];
        for (j = 0; j < user.recipes.length; j++) {
            if (user.recipes[j] != recipe._id) {
                updatedRecipes.push(user.recipes[j]);
            }
        }*/
        const recipeDeleting = user.recipes.filter(x => x ===  req.params.rid)[0];
        const index = recipe.saved.indexOf(recipeDeleting, 0);
        if ( index > -1) {
            user.recipes.splice(index, 1);
        }
        user = await User.findOneAndUpdate(
            {_id: req.params.uid},
            {$set: user},
            {new: true}
        );
        res.json({msg: "recipe removed", r: recipe, u: user});
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: "not a recipe object id"});
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
};