import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Recipe, { IRecipe } from '../../models/Recipe';
import User, { IUser } from '../../models/User';

/**
 * If the user is the creator of the recipe and other users have the recipe saved,
 * a user becomes the creator, and the user removes the recipe from its recipes list.
 *
 * If the user is the creator and nobody has the recipe saved, the recipe is removed
 * from the database and from the user's recipes list
 *
 * If it is a user that has the recipe saved, the recipe is removed from his or her
 * recipes list.
 *
 * In any other case the recipe is not removed.
 * @param req request param: recipe id, user id
 * @param res response msg, IRecipe, IUser
 * @returns
 */
export const remove = async (req: Request, res: Response) => {

  try {
    let recipe: IRecipe = await Recipe.findOne({ _id: req.params.rid });
    let user: IUser = await User.findOne({ email: req.params.uid });

    if (!recipe) {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'recipe not found' });
    }

    if (recipe.creator === user.email && recipe.saved.length > 0) {

      const c = recipe.saved.pop();
      recipe = await Recipe.findByIdAndUpdate(
        { _id: recipe._id },
        { update: { creator: c, saved: recipe.saved } },
        { new: true }
      );

    } else if (recipe.creator === user.email) {
      recipe = await Recipe.findByIdAndDelete({ _id: req.params.rid });
    } else if (recipe.saved.length > 0) {

      const userDeleting = recipe.saved.filter((x) => x === req.params.uid)[0];
      const index = recipe.saved.indexOf(userDeleting, 0);
      if (index > -1) {
        recipe.saved.splice(index, 1);
      }
      recipe = await Recipe.findByIdAndUpdate(
        { _id: recipe._id },
        { $set: recipe },
        { new: true }
      );

    } else {
      return res.json({ msg: 'recipe not removed' });
    }

    const recipeDeleting = user.recipes.filter((x) => x == req.params.rid)[0];
    const index = user.recipes.indexOf(recipeDeleting, 0);

    if (index > -1) {
      user.recipes.splice(index, 1);
    }

    user = await User.findOneAndUpdate(
      { _id: user._id },
      { $set: user },
      { new: true }
    );
    return res.json({ msg: 'recipe removed', r: recipe, u: user });

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
