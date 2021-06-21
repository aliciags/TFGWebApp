import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import { Mealtime } from '../../types/Mealtime';
import Menu, { IMenu } from '../../models/Menu';
import Day, { IDay } from '../../models/Day';
import User, { IUser } from '../../models/User';

/**
 * Create a Menu and all its days object and save it in the database.
 * @param req request body: { _user, title, description?, meal? }
 * @param res response<IMenu>
 * @returns promise response<IMenu>
 */
export const add = async (req: Request, res: Response) => {

  const { _user, title, description } = req.body;
  let { meal } = req.body;
  const wdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  try {
    const user: IUser = await User.findOne({ email: _user });

    if (!user) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'user does not exist' });
    }

    const menuFields = {
      _user: user._id,
      title,
      description,
    };

    /** create menu and save it */
    let m: IMenu = new Menu(menuFields);
    m = await m.save();

    let i = 0;
    const _menu = m._id;

    /** for each day of the week */
    wdays.forEach(async (day) => {
      /** create array of the meals of a day */
      const meals: Mealtime[] = [];

      /** if the user have not specified the meals get the user meals */
      if (!meal) {
        meal = user.meals;
      }

      /** for each meal add to the array a Mealtime object
       * with the name of the meal and an empty array of recipes
       */
      for (i = 0; i < meal.length; i++) {
        const m: Mealtime = {
          meal: meal[i],
          recipes: [],
        };
        meals.push(m);
      }

      /** set the properties of a day */
      const dayFields = {
        _menu,
        day,
        meals,
      };

      /** create the day and save it in the database */
      const d: IDay = new Day(dayFields);
      try {
        await d.save();
      } catch (err) {
        console.log(err.message);
      }
    });
    return res.json(m);

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
