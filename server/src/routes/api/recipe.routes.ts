import { Router } from "express";

import auth from "../../middleware/auth";
import * as RecipeController from "../../controllers/recipe.controller";

const recipeRouter: Router = Router();

/**
 * get all recipes
 * GET /api/
 * access Public
 */
recipeRouter.get("/", RecipeController.getAllRecipes);

/**
 * get single recipe by recipe id 
 * GET /api/:rid
 * access Public
 */
recipeRouter.get("/recipe/:rid", RecipeController.getRecipe);

/** 
 * add recipe 
 * POST /api
 * access Private
 */
recipeRouter.post("/recipe/", auth, RecipeController.addRecipe);

/**
 * update a recipe by recipe id
 * PUT /api/:rid
 * access Private
 */
recipeRouter.put("/recipe/:rid", auth, RecipeController.editRecipe);

/**
 * get saved or own recipes by user id
 * GET /api/book/:uid
 * access Private
 */
recipeRouter.get("/recipe/book/:uid", auth, RecipeController.getUserRecipes);

/**
 * remove a recipe by  recipe id
 * DELETE /api/:rid&:uid
 * access Private
 */
recipeRouter.delete("/recipe/:rid&:uid", auth, RecipeController.deleteRecipe);

export default recipeRouter;