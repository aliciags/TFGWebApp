import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Menu, { IMenu } from '../../models/Menu';
import Day, { IDay } from '../../models/Day';

/**
 * Given a menu id removes the menu and all the days that it contains
 * from the database.
 * @param req request param: menu id
 * @param res response<msg, IMenu, IDay[]>
 * @returns promise response<msg, IMenu, IDay[]>
 */
export const remove = async (req: Request, res: Response) => {

  try {
    const days: IDay[] = await Day.find({ _menu: req.params.mid });
    const delDays: IDay[] = [];
    let i = 0;

    for (i = 0; i < days.length; i++) {
      delDays.push(await Day.findByIdAndDelete({ _id: days[i]._id }));
    }

    const menu: IMenu = await Menu.findByIdAndDelete({ _id: req.params.mid });
    return res.json({ msg: 'menu removed', m: menu, days: delDays });

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
