import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * Given a user email it is removed from the database
 * @param req request param: user email
 * @param res response msg, IUser
 * @returns promise response msg IUser
 */
export const remove = async (req: Request, res: Response) => {
  try {
    const user: IUser = await User.findOneAndDelete({ email: req.params.uid });
    return res.json({ msg: 'User removed', usr: user });
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
