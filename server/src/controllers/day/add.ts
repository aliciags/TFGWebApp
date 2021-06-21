import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import Day, { IDay } from '../../models/Day';

/**
 * Create a Day object and save it in the database.
 * @param req request body: { menu id, day, meals }
 * @param res response IDay
 * @returns promise response IDay
 */
export const add = async (req: Request, res: Response) => {

  const { menu, day, meals } = req.body;
  const dayFields = {
    menu,
    day,
    meals,
  };

  try {
    const d: IDay = new Day(dayFields);
    await d.save();
    return res.json(d);
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
