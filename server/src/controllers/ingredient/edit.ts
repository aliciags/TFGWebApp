import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Ingredient, { IIngredient } from '../../models/Ingredient';

/**
 * If administrator edits the diet of an ingredient.
 * @param req request param: ingredient name, body:{ diet }
 * @param res response<IIngredient>
 * @returns promise response<IIngredient>
 */
export const edit = async (req: Request, res: Response) => {

  const role: string = req.role;
  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  const { diet } = req.body;
  try {
    let ingredient: IIngredient = await Ingredient.findOne({ name: req.params.iid });

    if (!ingredient) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Ingredient does not exist' });
    }

    ingredient = await Ingredient.findByIdAndUpdate(
      { _id: ingredient._id },
      { $set: { diet: diet } },
      { new: true, runValidators: true }
    );

    return res.json(ingredient);
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
