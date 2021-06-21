import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import Day, { IDay } from '../../models/Day';

/**
 * Get all the days of the database.
 * This request can only be done from admin users.
 * @param req request
 * @param res response<IDay[]>
 * @returns promise response<IDay[]>
 */
export const getAll = async (req: Request, res: Response) => {

  const role: string = req.role;

  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  try {
    const days: IDay[] = await Day.find();
    return res.json(days);
  } catch (err) {
    console.error(err.message);

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
