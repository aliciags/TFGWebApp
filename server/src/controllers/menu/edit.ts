import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Menu, { IMenu } from '../../models/Menu';

/**
 * If the body variables have a value, set the document property
 * and updates the document in the datase.
 * @param req request param: menu id, body: { title?, description? }
 * @param res response<IMenu>
 * @returns promise response<IMenu>
 */
export const edit = async (req: Request, res: Response) => {

  const { title, description } = req.body;

  try {
    let menu: IMenu = await Menu.findById({ _id: req.params.mid });

    if (!menu) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Menu does not exist' });
    }

    if (title) {
      menu.title = title;
    }
    if (description) {
        menu.description = description;
    }

    const menuFields = {
      title,
      description,
    };
    menu = await Menu.findByIdAndUpdate(
      { _id: req.params.mid },
      { $set: menuFields, runValidators: true },
      { new: true, runValidators: true }
    );
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
