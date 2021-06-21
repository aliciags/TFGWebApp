import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Ingredient, { IIngredient } from '../../models/Ingredient';

/**
 * If administrator adds ingredient to the database.
 * @param req request body: {name, diet}
 * @param res response<IIngredient>
 * @returns promise response<IIngredient>
 */
export const add = async (req: Request, res: Response) => {

  const role: string = req.role;
  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  const { name, diet } = req.body;
  try {
    let ingredient: IIngredient = await Ingredient.findOne({ name: name });
    if (ingredient) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Ingredient already exists' });
    }

    const ingredientFields = {
      name,
      diet
    };

    ingredient = new Ingredient(ingredientFields);
    await ingredient.save();
    return res.json(ingredient);
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
