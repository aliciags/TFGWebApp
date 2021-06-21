import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import Day, { IDay } from '../../models/Day';

/**
 * If the body variables have a value, set the document property
 * and updates the document in the datase.
 * @param req request param: day id, body: { menu?, day?, meals?}
 * @param res response<IDay>
 * @returns promise response<IDay>
 */
export const edit = async (req: Request, res: Response) => {

  const id = req.params.did;
  const { menu, day, meals } = req.body;

  try {
    let d: IDay = await Day.findById({ _id: id });

    if (menu) {
      d.menu = menu;
    }
    if (day) {
      d.day = day;
    }
    if (meals) {
      d.meals = meals;
    }

    if (!d) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Day does not exist' });
    }

    d = await Day.findByIdAndUpdate(
      { _id: id },
      { $set: d },
      { new: true, runValidators: true }
    );

    return res.json(d);
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
