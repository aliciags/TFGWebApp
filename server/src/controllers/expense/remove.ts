import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Expense, { IExpense } from '../../models/Expense';

/**
 * Given an expense id removes it from the database.
 * @param req request param: expense id
 * @param res response<msg, IExpense>
 * @returns promise response<msg, IExpense>
 */
export const remove = async (req: Request, res: Response) => {

  try {
    const expense: IExpense = await Expense.findByIdAndDelete({ _id: req.params.eid });

    if (!expense) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Expense does not exist' });
    }

    return res.json({ msg: 'expense removed', e: expense });
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
