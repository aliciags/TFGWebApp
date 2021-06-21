import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Menu, { IMenu } from '../../models/Menu';

/**
 * If administrator get all the menus from the database
 * @param req request
 * @param res response<IMenu[]>
 * @returns promise response<IMenu[]>
 */
export const getAll = async (req: Request, res: Response) => {

  const role: string = req.role;
  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  try {
    const menus: IMenu[] = await Menu.find();
    return res.json(menus);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
