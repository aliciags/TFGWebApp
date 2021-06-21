import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Recipe, { IRecipe } from '../../models/Recipe';
import User, { IUser } from '../../models/User';

/**
 * Given a user email and a recipe, save the recipe
 * in the user's recipes if it is not already in the list
 * or if the user is not the creator.
 *
 * Then add the user to the recipe's saved array.
 *
 * Update both documents and return a msg
 * @param req request param: recipe id, user email
 * @param res response msg
 * @returns promise response msg
 */
export const save = async (req: Request, res: Response) => {

  const rid = req.params.rid;
  const uid = req.params.uid;

  try {
    const recipe: IRecipe = await Recipe.findOne({ _id: rid });
    const u = recipe.saved.filter((user) => user == uid)[0];
    const index = recipe.saved.indexOf(u, 0);

    if (index > -1 || recipe.creator == uid) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'the user already has this recipe' });
    }

    const user: IUser = await User.findOne({ email: uid });
    user.recipes.push(rid);
    recipe.saved.push(uid);

    await Recipe.findOneAndUpdate(
        { _id: rid },
        { $set: { saved: recipe.saved } },
        { new: true, runValidators: true }
    );

    await User.findOneAndUpdate(
        { _id: user.id },
        { $set: { recipes: user.recipes } },
        { new: true, runValidators: true }
    );
    return res.json({ msg: 'recipe saved' });

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
