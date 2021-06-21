import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * Given a user email and the different values it is updates in the database.
 * @param req request param: user email, body: { firstname, lastname, birthyear,
 * meals, diet, groceries, recipes}
 * @param res reponse IUser
 * @returns promise response IUser
 */
export const edit = async (req: Request, res: Response) => {
  const email = req.params.uid;
  const {
    firstname,
    lastname,
    birthyear,
    meals,
    diet,
    groceries,
    recipes,
  } = req.body;
  const userFields = {
    firstname,
    lastname,
    birthyear,
    meals,
    diet,
    groceries,
    recipes,
  };

  try {
    let user: IUser = await User.findOne({ email: email }).populate('-password');
    if (!user) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'user not registered' });
    }

    user = await User.findOneAndUpdate(
      { email: email },
      { $set: userFields },
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
