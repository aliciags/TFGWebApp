import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Recipe, { IRecipe } from '../../models/Recipe';

/**
 * Filter the recipes depending on the body parameters.
 * @param req request body: {name?, diet?, meal?, ingredietns?, user?}
 * @param res response IRecipe
 * @returns promise response IRecipe
 */
export const getFilter = async (req: Request, res: Response) => {

  const { name, diet, meal, ingredients, user } = req.body;
  let recipes: IRecipe[];
  const filter = [];

  try {
    if (user) {
      filter.push({ $or: [{ creator: user }, { saved: user }] });
    }
    if (name) {
      filter.push({ name: { $regex: name, $options: 'i' } });
    }
    if (diet != 'Diet...' && diet) {
      filter.push({ diet: diet });
    }
    if (meal != 'Meal...' && meal) {
      filter.push({ meal: meal });
    }
    if (ingredients) {
      if ((<Array<string>>ingredients).length > 0) {
        filter.push({ ingredients: { $all: ingredients } });
      }
    }

    if (filter.length > 0) {
      recipes = await Recipe.find({
        $and: filter,
      });
    } else {
      recipes = await Recipe.find();
    }
    return res.json(recipes);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
