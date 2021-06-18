import { Router } from 'express';

import auth from '../../middleware/auth';
import upload from '../../middleware/image';
import * as RecipeController from '../../controllers/recipe.controller';

const recipeRouter: Router = Router();

/**
 * get all recipes
 * GET /api/
 * access Public
 */
recipeRouter.get('/', RecipeController.getAllRecipes);

/**
 * gett all recipes with the defined filters
 * POST /api/filter
 * access Public
 */
recipeRouter.post('/filter', RecipeController.getFilteredRecipes);

/**
 * get single recipe by recipe id
 * GET /api/:rid
 * access Public
 */
recipeRouter.get('/recipe/:rid', RecipeController.getRecipe);

/**
 * add recipe
 * POST /api
 * access Private
 */
recipeRouter.post('/recipe/', auth, upload.single('image'), RecipeController.addRecipe);

/**
 * update a recipe by recipe id
 * PUT /api/recipe/:rid
 * access Private
 */
recipeRouter.put('/recipe/:rid', auth, upload.single('image'), RecipeController.editRecipe);

/**
 * get saved or own recipes by user id
 * GET /api/recipe/book/:uid
 * access Private
 */
recipeRouter.get('/recipe/book/:uid', auth, RecipeController.getUserRecipes);

/**
 * save a recipe by user email and update user recipes
 * PUT /api/recipe/:rid&:uid
 * access Private
 */
 recipeRouter.put('/recipe/save/:rid&:uid', auth, RecipeController.saveRecipe);

/**
 * remove a recipe by  recipe id
 * DELETE /api/recipe/:rid&:uid
 * access Private
 */
recipeRouter.delete('/recipe/:rid&:uid', auth, RecipeController.deleteRecipe);

export default recipeRouter;