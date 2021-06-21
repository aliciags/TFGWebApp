import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Ingredient, { IIngredient } from '../../models/Ingredient';

/**
 * Given a string searches for ingrediens that contain such string.
 * @param req request body: { name }
 * @param res response<IIngredient>
 * @returns promise response<IIngredient>
 */
export const getFilter = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const ingredients: IIngredient[] = await Ingredient.find({
      name: { $regex: name, $options: 'i' },
    });
    return res.json(ingredients);
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
