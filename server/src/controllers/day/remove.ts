import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import Day, { IDay } from '../../models/Day';

/**
 * Given a day id it removes the day from the database.
 * @param req request param: day id
 * @param res response<msg, IDay>
 * @returns promise response<msg, IDay>
 */
export const remove = async (req: Request, res: Response) => {

  try {
    const day: IDay = await Day.findByIdAndDelete({ _id: req.params.did });
    return res.json({ msg: 'day removed', d: day });
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
