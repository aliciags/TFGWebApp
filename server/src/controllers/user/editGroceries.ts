import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';
import Ingredient, { IIngredient } from '../../models/Ingredient';

/**
 * Given a user email, an ingredient name and an operation.
 *
 * If the action is add and the ingredient is in the array, it returns
 * an error, else adds the ingredient in the groceries array.
 *
 * If the action is delete and the ingredient is not in the array, it
 * returns an error, else deletes the ingredient from the array.
 *
 * The user is updated and returned
 * @param req request param: user email, ingredient name body: { action }
 * @param res response IUser
 * @returns promise response IUser
 */
export const editGroceries = async (req: Request, res: Response) => {
  const email: string = req.params.uid;
  const ingredient: string = req.params.iid;
  const { action } = req.body;

  try {
    let user: IUser = await User.findOne({ email: email }).populate(
      '-password'
    );

    if (!user) {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'user not found' });
    }

    const ing: IIngredient = await Ingredient.findOne({ name: ingredient });

    if (!ing) {
      return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'ingredient not found' });
    }

    const i = user.groceries.filter((x) => x === ingredient)[0];
    const index = user.groceries.indexOf(i, 0);

    switch (action) {
      case 'add':
        if (index > -1) {
          return res
            .status(HttpStatusCodes.NOT_FOUND)
            .json({ msg: 'ingredient already in the list' });
        } else {
          user.groceries.push(ingredient);
        }
        break;
      case 'delete':
          if (index > -1 ) {
            user.groceries.splice(index, 1);
          } else {
            return res
              .status(HttpStatusCodes.NOT_FOUND)
              .json({ msg: 'ingredient not in the list' });
          }
    }

    user = await User.findOneAndUpdate(
      { email: email },
      { $set: user },
      { new: true, runValidators: true }
    ).populate('-password');
    return res.json(user);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
