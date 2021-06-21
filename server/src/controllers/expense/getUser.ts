import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Expense, { IExpense } from '../../models/Expense';

/**
 * Given a user email it returs all his or her expenses.
 * @param req request param: user email
 * @param res response<IExpense[]>
 * @returns promise response<IExpense[]>
 */
export const getUser = async (req: Request, res: Response) => {

  try {
    const expenses: IExpense[] = await Expense.find({ _user: req.params.uid });

    if (!expenses) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'There are no expenses for such user' });
    }
    return res.json(expenses);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
