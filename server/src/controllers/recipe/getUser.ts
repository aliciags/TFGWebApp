import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Recipe, { IRecipe } from '../../models/Recipe';
import User, { IUser } from '../../models/User';

/**
 * Given a user email it returns all the recipes that he or she has
 * written or saved.
 * @param req request param: user email
 * @param res response IRecipe[]
 * @returns promise response IRecipe[]
 */
export const getUser = async (req: Request, res: Response) => {

  let i = 0;
  try {
    const user: IUser = await User.findOne({ email: req.params.uid });

    if (!user) {
      res.status(HttpStatusCodes.NOT_FOUND).json({ msg: 'user not found' });
    }

    const recipes: IRecipe[] = [];

    for (i = 0; i < user.recipes.length; i++) {
      recipes.push(await Recipe.findById({ _id: user.recipes[i]._id }));
    }

    return res.json(recipes);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
