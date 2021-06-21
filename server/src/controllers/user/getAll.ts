import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * If administrator it return all the users from the database
 * @param req request
 * @param res response IUser[]
 * @returns promise response IUser[]
 */
export const getAll = async (req: Request, res: Response) => {

  const role: string = req.role;

  if (role !== 'admin') {
    return res
      .status(HttpStatusCodes.FORBIDDEN)
      .json({ msg: 'Access denied', role: role });
  }

  try {
    const users: IUser[] = await User.find();
    return res.json(users);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
