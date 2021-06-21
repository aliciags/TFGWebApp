import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * Given a user email it returns if it already exists in the database or not.
 * @param req request param: user email
 * @param res response boolean
 * @returns promise response boolean
 */
export const exists = async (req: Request, res: Response) => {

  try {

    const user: IUser = await User.findOne({ email: req.params.uid });

    if (user) {
      return res.json({ msg: true });
    } else {
      return res.json({ msg: false });
    }

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
