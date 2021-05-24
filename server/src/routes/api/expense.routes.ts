import { Router } from "express";

import auth from "../../middleware/auth";
import * as ExpenseController from "../../controllers/expense.controller";

const expenseRouter: Router = Router();

//eid is the expense id
//uid is the user email

/**
 * get all expenses
 * GET /api/expense
 * access admin
 */
expenseRouter.get("/", auth, ExpenseController.getAllExpenses);

/**
 * get all user expenses
 * GET api/expense/user/:uid
 * access Private
 */
expenseRouter.get("/user/:uid", auth, ExpenseController.getUserExpenses);

/**
 * get an expense
 * GET api/expense/:eid
 * access Private
 */
expenseRouter.get("/:eid", auth, ExpenseController.getExpense);

/**
 * add an expense
 * POST api/expense
 * access Private
 */
expenseRouter.post("/", auth, ExpenseController.addExpense);

/**
 * edit an expense
 * PUT api/expense/:eid
 * access Private
 */
expenseRouter.put("/:eid", auth, ExpenseController.editExpense);

/**
 * delete an expense
 * DELETE api/expense/:eid
 * access Private
 */
expenseRouter.delete("/:eid", auth, ExpenseController.deleteExpense);

export default expenseRouter;