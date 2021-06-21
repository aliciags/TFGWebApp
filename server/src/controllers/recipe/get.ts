import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Recipe, { IRecipe } from '../../models/Recipe';

/**
 * Given a recipe id it returns the recipe from the database.
 * @param req request param: recipe id
 * @param res response IRecipe
 * @returns promise response IRecipe
 */
export const get = async (req: Request, res: Response) => {

  try {
    const recipe: IRecipe = await Recipe.findById({ _id: req.params.rid });
    if (!recipe) {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'recipe not found' });
    }
    return res.json(recipe);

  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a recipe object id' });
    }
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
