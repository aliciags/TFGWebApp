import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Expense, { IExpense } from '../../models/Expense';

/**
 * If admisitrator get all the expenses from the database.
 * @param req request
 * @param res response<IExpense[]>
 * @returns promise response<IExpense[]>
 */
export const getAll = async (req: Request, res: Response) => {

  const role: string = req.role;

  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  try {
    const expenses: IExpense[] = await Expense.find();
    return res.json(expenses);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
