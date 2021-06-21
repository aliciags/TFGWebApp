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
 * Then a recipe object is created and added in the database.
 * The recipe id is pushed in the user's recipes array.
 * @param req request body: {name, timing, guest, diet,
 * ingredients, steps, videoRecipe, image}
 * @param res response IRecipe
 * @returns promise response IRecipe
 */
export const add = async (req: Request, res: Response) => {

  const { name, timing, guest, meal, diet, ingredients, steps, videoRecipe } =
    JSON.parse(req.body.data);
  const image = req.file.path;
  const userID = req.userId;

  try {
    const user: IUser = await User.findById(userID);

    if (!user) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'user not found' });
    }

    const creator: string = user.email;
    const recipeFields = {
      name,
      timing,
      guest,
      meal,
      diet,
      image,
      ingredients,
      steps,
      videoRecipe,
      creator,
    };

    const recipe: IRecipe = new Recipe(recipeFields);
    await recipe.save();
    user.recipes.push(recipe._id);
    await User.findOneAndUpdate(
      { _id: user._id },
      { $set: user },
      { new: true, runValidators: true }
    );
    return res.json(recipe);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
