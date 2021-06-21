import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Menu, { IMenu } from '../../models/Menu';

/**
 * Given a menu id it returns the menu from the database
 * @param req request param: menu id
 * @param res response<IMenu>
 * @returns promise response<IMenu>
 */
export const get = async (req: Request, res: Response) => {

  try {
    const menu: IMenu = await Menu.findById({ _id: req.params.mid });
    return res.json(menu);

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
