import { Response } from 'express';
//  import multer, { Multer } from 'multer';

import HttpStatusCodes from 'http-status-codes';

import Request from '../types/Request';
import Recipe, { IRecipe } from '../models/Recipe';
import User, { IUser } from '../models/User';

/*const upload: Multer = multer({
    dest: 'uploads/'
});*/


export const getAllRecipes = async (req: Request, res: Response) => {
    let recipes: IRecipe[];
    try {
        recipes = await Recipe.find();
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(recipes);
};

export const getFilteredRecipes = async (req: Request, res: Response) => {

    const { name, diet, meal, ingredients, user } = req.body;
    let recipes: IRecipe[];
    const filter = [];

    try {
        if ( user ) {
            filter.push(
                { $or: [ {creator: user}, {saved: user} ] }
            );
        }
        if ( name ) {
            filter.push(
                {name: {$regex: name, $options: 'i' }}
            );
        }
        if ( diet != 'Diet...' && diet ) {
            filter.push(
                {diet: diet}
            );
        }
        if ( meal != 'Meal...' && meal ) {
            filter.push(
                {meal: meal}
            );
        }
        // console.log(<Array<string>>ingredients.length);
        if ( ingredients ) {
            if ( (<Array<string>>ingredients).length > 0) {
                // ingredients has to be an array of ingredients
                // console.log('hello');
                filter.push(
                    {ingredients: {$all: ingredients}}
                );
            }
        }
        console.log(filter.length);
        if (filter.length > 0) {
            recipes = await Recipe.find({
                $and: filter
            });
        } else {
            recipes = await Recipe.find();
        }
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(recipes);
};

export const getRecipe = async (req: Request, res: Response) => {
    let recipe: IRecipe;
    try {
        recipe = await Recipe.findById({_id: req.params.rid});
        if (!recipe) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: 'recipe not found'});
        }
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a recipe object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(recipe);
};

export const addRecipe = async (req: Request, res: Response) => {

    console.log(JSON.parse(req.body.data));
    const {name, timing, guest, meal, diet, ingredients, steps, videoRecipe} = JSON.parse(req.body.data); // JSON.parse(req.body.data);
    const image = req.file.path;
    const userID = req.userId;
    let user: IUser;
    let recipe: IRecipe;
    try {
        user = await User.findById(userID);
        if (!user) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'user not found'});
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
       recipe = new Recipe(recipeFields);
       await recipe.save();
       user.recipes.push(recipe._id);
       await User.findOneAndUpdate(
           {_id: user._id},
           {$set: user},
           {new: true, runValidators: true}
       );
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(recipe);
};

export const getUserRecipes = async (req: Request, res: Response) => {

    let i = 0;
    let user: IUser;
    let recipes: IRecipe[];

    try {
        user = await User.findOne({email: req.params.uid});
        if (!user) {
            res.status(HttpStatusCodes.NOT_FOUND).json({msg: 'user not found'});
        }
        recipes = [];
        for (i = 0; i < user.recipes.length; i++) {
            recipes.push( await Recipe.findById({_id: user.recipes[i]._id}));
        }
    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(recipes);
};

export const saveRecipe = async (req: Request, res: Response) => {

    const rid = req.params.rid;
    const uid = req.params.uid;
    let recipe: IRecipe;

    try {
        recipe = await Recipe.findOne({_id: rid });
        const u = recipe.saved.filter( user => user == uid)[0];
        const index = recipe.saved.indexOf(u, 0);
        if ( index > -1 || recipe.creator == uid ) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'the user already has this recipe'});
        }
        const user: IUser = await User.findOne({email: uid});
        user.recipes.push(rid);
        recipe.saved.push(uid);

        await Recipe.findOneAndUpdate(
            {_id: rid},
            {$set: {saved: recipe.saved}},
            {new: true, runValidators: true}
        );

        await User.findOneAndUpdate(
            {_id: user.id},
            {$set: {recipes: user.recipes}},
            {new: true, runValidators: true}
        );

    } catch (err) {
        console.error(err.message);
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json({msg: 'recipe saved'});
};

export const editRecipe = async (req: Request, res: Response) => {

    console.log('here');
    const {name, timing, guest, meal, diet, ingredients, steps, videoRecipe} = JSON.parse(req.body.data); // JSON.parse(req.body.data);
    const image = req.file.path;
    let user: IUser;
    let recipe: IRecipe;

    try {
        user = await User.findById({_id: req.userId});
        recipe = await Recipe.findById({_id: req.params.rid });
        if (!user || !recipe) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: 'user or recipe not found'});
        }
        if (recipe.creator != user.email) {
            return res.status(HttpStatusCodes.FORBIDDEN).json({msg: 'not allowed to edit the recipe'});
        }

        if (name) {
            recipe.name = name;
        }
        if (timing) {
            recipe.timing = timing;
        }
        if (guest) {
            recipe.guest = guest;
        }
        if (meal) {
            recipe.meal = meal;
        }
        if (diet) {
            recipe.diet = diet;
        }
        if (image) {
            recipe.image = image;
        }
        if (ingredients) {
            recipe.ingredients = ingredients;
        }
        if (steps) {
            recipe.steps = steps;
        }
        if (videoRecipe) {
            recipe.name = videoRecipe;
        }
        recipe = await Recipe.findByIdAndUpdate(
            {_id: req.params.rid},
            {$set: recipe},
            {new: true, runValidators: true}
        );
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a recipe object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json(recipe);
};

export const deleteRecipe = async (req: Request, res: Response) => {

    let recipe: IRecipe;
    let user: IUser;

    try {
        recipe = await Recipe.findOne({_id: req.params.rid});
        user = await User.findOne({email: req.params.uid});
        if (!recipe) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({msg: 'recipe not found'});
        }
        if (recipe.creator === user.email && recipe.saved.length > 0) {
            const c = recipe.saved.pop();
            recipe = await Recipe.findByIdAndUpdate(
                {_id: recipe._id},
                {update: {creator: c, saved: recipe.saved}},
                {new: true}
            );
        } else if (recipe.creator === user.email) {
            recipe = await Recipe.findByIdAndDelete({_id: req.params.rid});
        } else if (recipe.saved.length > 0 ) {
            const userDeleting = recipe.saved.filter(x => x ===  req.params.uid)[0];
            const index = recipe.saved.indexOf(userDeleting, 0);
            if ( index > -1) {
                 recipe.saved.splice(index, 1);
            }
            recipe = await Recipe.findByIdAndUpdate(
                {_id: recipe._id},
                {$set: recipe},
                {new: true}
            );
        } else {
            return res.json({msg: 'recipe not removed'});
        }
        const recipeDeleting = user.recipes.filter(x => x ==  req.params.rid)[0];
        const index = user.recipes.indexOf(recipeDeleting, 0);
        if ( index > -1) {
            user.recipes.splice(index, 1);
        }
        user = await User.findOneAndUpdate(
            {_id: user._id},
            {$set: user},
            {new: true}
        );
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({msg: 'not a recipe object id'});
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
    return res.json({msg: 'recipe removed', r: recipe, u: user});
};