import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Expense, { IExpense } from '../../models/Expense';

/**
 * Given an expense id it return the expense from the database.
 * @param req request param: expense id
 * @param res response<IExpense>
 * @returns promise response<IExpense>
 */
export const get = async (req: Request, res: Response) => {

  try {
    const expense: IExpense = await Expense.findById({ _id: req.params.eid });

    if (!expense) {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'Expense not found' });
    }
    return res.json(expense);

  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a expense object id' });
    }
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
