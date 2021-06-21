import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Menu, { IMenu } from '../../models/Menu';
import User, { IUser } from '../../models/User';

/**
 * Given an user email it returns all the users' menus from the database.
 * @param req request param: user email
 * @param res response<IMenu[]>
 * @returns promise response<IMenu[]>
 */
export const getAllUser = async (req: Request, res: Response) => {

  try {
    const user: IUser = await User.findOne({ email: req.params.uid });

    if (!user) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'user does not exist' });
    }

    const menus: IMenu[] = await Menu.find({ _user: user._id });

    if (!menus) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'There are no menus for such user' });
    }

    return res.json(menus);

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
