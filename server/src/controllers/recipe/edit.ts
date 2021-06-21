import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Recipe, { IRecipe } from '../../models/Recipe';
import User, { IUser } from '../../models/User';

/**
 * The recipe fields are in a From Data.
 * The picture is uploaded and the recipe data in a JSON
 * data string.
 *
 * If the request variables have a value, set the document property
 * and updates the document in the datase.
 * @param req request body: {name, timing, guest, meal, diet, ingredients,
 * steps, videoRecipe, image}
 * @param res response IRecipe
 * @returns promise response IRecipe
 */
export const edit = async (req: Request, res: Response) => {

  const { name, timing, guest, meal, diet, ingredients, steps, videoRecipe } =
    JSON.parse(req.body.data);
  const image = req.file.path;

  try {
    const user: IUser = await User.findById({ _id: req.userId });
    let recipe: IRecipe = await Recipe.findById({ _id: req.params.rid });

    if (!user || !recipe) {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'user or recipe not found' });
    }

    if (recipe.creator != user.email) {
      return res
        .status(HttpStatusCodes.FORBIDDEN)
        .json({ msg: 'not allowed to edit the recipe' });
    }

    if (name) {
      recipe.name = name;
    }
    if (timing) {
      recipe.timing = timing;
    }
    if (guest) {
      recipe.guest = guest;
    }
    if (meal) {
      recipe.meal = meal;
    }
    if (diet) {
      recipe.diet = diet;
    }
    if (image) {
      recipe.image = image;
    }
    if (ingredients) {
      recipe.ingredients = ingredients;
    }
    if (steps) {
      recipe.steps = steps;
    }
    if (videoRecipe) {
      recipe.name = videoRecipe;
    }
    recipe = await Recipe.findByIdAndUpdate(
      { _id: req.params.rid },
      { $set: recipe },
      { new: true, runValidators: true }
    );
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
