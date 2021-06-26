import { Router } from 'express';
import { check } from 'express-validator/check';

import auth from '../middleware/auth';
import upload from '../middleware/image';

import * as AuthController from '../controllers/auth/';
import * as UserController from '../controllers/user';
import * as RecipeController from '../controllers/recipe';
import * as IngredientController from '../controllers/ingredient';
import * as MenuController from '../controllers/menu';
import * as DayController from '../controllers/day/';
import * as ExpenseController from '../controllers/expense';

/**
 * All the API endpoints
 */
const router: Router = Router();

// Authentication routes
router.get('/auth', auth, AuthController.authenticate);
router.post(
    '/auth',
    [ check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists() ],
    AuthController.login);

// User routes
router.get('/user', auth, UserController.getAll);
router.get('/user/:uid', auth, UserController.get);
router.get('/user/exists/:uid', UserController.exists);
router.post('/user', UserController.add);
router.put('/user/:uid', auth, UserController.edit);
router.put('/user/ingredient/:uid&:iid', auth, UserController.editGroceries);
router.delete('/user/:uid', auth, UserController.remove);

// Recipe routes
router.get('/', RecipeController.getAll);
router.get('/recipe/:rid', RecipeController.get);
router.get('/recipe/book/:uid', auth, RecipeController.getUser);
router.post('/filter', RecipeController.getFilter);
router.post('/recipe', auth, upload.single('image'), RecipeController.add);
router.put('/recipe/:rid', auth, upload.single('image'), RecipeController.edit);
router.put('/recipe/save/:rid&:uid', auth, RecipeController.save);
router.delete('/recipe/:rid&:uid', auth, RecipeController.remove);

// Ingredient routes
router.get('/ingredient', auth,  IngredientController.getAll);
router.get('/ingredient/:iid',  IngredientController.get);
router.post('/ingredient/filter', auth, IngredientController.getFilter);
router.post('/ingredient', auth, IngredientController.add);
router.put('/ingredient/:iid', auth, IngredientController.edit);
router.delete('/ingredient/:iid', auth, IngredientController.remove);

// Menu routes
router.get('/menu', auth, MenuController.getAll);
router.get('/menu/user/:uid', auth, MenuController.getAllUser);
router.get('/menu/:mid', auth, MenuController.get);
router.post('/menu/', auth, MenuController.add);
router.put('/menu/:mid', auth, MenuController.edit);
router.delete('/menu/:mid', auth, MenuController.remove);

// Day routes
router.get('/day', auth, DayController.getAll);
router.get('/day/menu/:mid', auth, DayController.getMenuDays);
router.get('/day/:did', auth, DayController.get);
router.post('/day/', auth, DayController.add);
router.put('/day/:did', auth, DayController.edit);
router.put('/day/meal/:mealid', auth, DayController.editRecipe);
router.delete('/day/:did', auth, DayController.remove);

// Expense routes
router.get('/expense/', auth, ExpenseController.getAll);
router.get('/expense/user/:uid', auth, ExpenseController.getUser);
router.get('/expense/:eid', auth, ExpenseController.get);
router.post('/expense/', auth, ExpenseController.add);
router.put('/expense/:eid', auth, ExpenseController.edit);
router.delete('/expense/:eid', auth, ExpenseController.remove);

export default router;
