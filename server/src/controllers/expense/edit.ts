import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Expense, { IExpense } from '../../models/Expense';

/**
 * If the body variables have a value, set the document property
 * and updates the document in the datase.
 * @param req request param: expense id, body: { date?, ingredients?, expense?}
 * @param res response<IExpense>
 * @returns promise response<IExpense>
 */
export const edit = async (req: Request, res: Response) => {

  const { date, ingredients, expense } = req.body;

  try {
    let exp: IExpense = await Expense.findById({ _id: req.params.eid });

    if (!exp) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Expense does not exist' });
    }

    if (date) {
        exp.date = date;
    }
    if (ingredients) {
        exp.ingredients = ingredients;
    }
    if (expense) {
        exp.expense = expense;
    }

    exp = await Expense.findByIdAndUpdate(
      { _id: req.params.eid },
      { $set: exp },
      { new: true, runValidators: true }
    );
    return res.json(exp);

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
