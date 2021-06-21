import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import Day, { IDay } from '../../models/Day';

/**
 * Given a day id or a meal id it return the day.
 * @param req request param: either day id or meal id
 * @param res response<Day>
 * @returns promise response<Day>
 */
export const get = async (req: Request, res: Response) => {

  try {
    const day: IDay = await Day.findById({
      $or: [{ _id: req.params.did }, { 'meals._id': req.params.did }],
    });

    if (!day) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Day does not exist' });
    }

    return res.json(day);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a day object id' });
    }

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
