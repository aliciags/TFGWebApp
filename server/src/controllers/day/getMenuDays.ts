import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import Day, { IDay } from '../../models/Day';

/**
 * Given a valid menu id, it returs all the days that contain such id.
 * Therefore this function returns all the days of a menu.
 * @param req request param: menu id
 * @param res response<IDay[]>
 * @returns promise response<IDay[]>
 */
export const getMenuDays = async (req: Request, res: Response) => {

  try {
    const days: IDay[] = await Day.find({ _menu: req.params.mid });

    if (!days) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'There is no such menu' });
    }

    return res.json(days);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a menu object id' });
    }

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
