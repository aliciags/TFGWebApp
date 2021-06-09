import { Router } from 'express';

import auth from '../../middleware/auth';
import * as IngredientController from '../../controllers/ingredient.controller';

const ingredientRouter: Router = Router();

/**
 * get all ingredients
 * GET /api/ingredient
 * access admin
 */
ingredientRouter.get('/', auth,  IngredientController.getAllIngredients);

/**
 * get ingredients by ingredient id
 * GET /api/ingredient/:iid
 * access Public
 */
ingredientRouter.get('/:iid',  IngredientController.getIngredient);

/**
 * get ingredients by ingredient name
 * GET /api/ingredient/filter
 * access Private
 */
ingredientRouter.post('/filter', auth, IngredientController.getFilterIngredient);


/**
 * add ingredient
 * POST /api/ingredient
 * access admin
 */
ingredientRouter.post('/', auth, IngredientController.addIngredient);

/**
 * update a ingredient by ingredient id
 * PUT /api/ingredient/:iid
 * access admin
 */
ingredientRouter.put('/:iid', auth, IngredientController.editIngredient);

/**
 * remove a ingredient by ingredient id
 * DELETE /api/ingredient/:iid
 * access admin
 */
ingredientRouter.delete('/:iid', auth, IngredientController.deleteIngredient);

export default ingredientRouter;