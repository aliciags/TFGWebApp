import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Recipe, { IRecipe } from '../../models/Recipe';

/**
 * Get all the recipes from the database
 * @param req request
 * @param res response
 * @returns promise response
 */
export const getAll = async (req: Request, res: Response) => {

  try {
    const recipes: IRecipe[] = await Recipe.find();
    return res.json(recipes);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
