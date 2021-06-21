import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * Given a user email it returns the user from the database
 * @param req request param: user email
 * @param res response IUser
 * @returns promise response IUser
 */
export const get = async (req: Request, res: Response) => {

  try {
    const user: IUser = await User.findOne({ email: req.params.uid }).populate('-password');

    if (!user) {
        return res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ msg: 'user not found' });
    }

    return res.json(user);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
