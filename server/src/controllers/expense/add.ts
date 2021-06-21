import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Expense, { IExpense } from '../../models/Expense';

/**
 * Create an Expense object and save it in the database.
 * @param req request body: {_user, ingredients, expense, date}
 * @param res response<IExpense>
 * @returns promise response<IExpense>
 */
export const add = async (req: Request, res: Response) => {

  const { _user, ingredients, expense, date } = req.body;
  const expenseFields = {
    _user,
    date: date,
    ingredients,
    expense,
  };

  if (!expenseFields.date) {
    expenseFields.date = Date.now();
  }

  try {
    const exp: IExpense = new Expense(expenseFields);
    await exp.save();
    return res.json(exp);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
