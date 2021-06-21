import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Ingredient, { IIngredient } from '../../models/Ingredient';

/**
 * If administrator get all the ingredients in the database
 * @param req request
 * @param res response<IIngredient[]>
 * @returns promise response<IIngredient[]>
 */
export const getAll = async (req: Request, res: Response) => {

  const role: string = req.role;

  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  try {
    const ingredients: IIngredient[] = await Ingredient.find();
    return res.json(ingredients);
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
