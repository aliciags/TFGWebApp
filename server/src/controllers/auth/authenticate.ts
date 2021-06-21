import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * @param req request
 * @param res response
 */
export const authenticate = async (req: Request, res: Response) => {

  try {

    const user: IUser = await User.findById(req.userId).select('-password');
    return res.json(user);

  } catch (err) {

    console.error(err.message);

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });

  }

};
