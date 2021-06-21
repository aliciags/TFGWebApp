import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Ingredient, { IIngredient } from '../../models/Ingredient';

/**
 * Get an ingredient from the database.
 * @param req request param: ingredient name
 * @param res response<IIngredient>
 * @returns promise response<IIngredient>
 */
export const get = async (req: Request, res: Response) => {

  try {
    const ingredient: IIngredient = await Ingredient.findOne({
      name: req.params.iid,
    });

    if (!ingredient) {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'Ingredient not found' });
    }

   return  res.json(ingredient);
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
