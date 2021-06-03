import { Response } from 'express';

import HttpStatusCodes from 'http-status-codes';

import Request from '../types/Request';
import Day, { IDay } from '../models/Day';

export const getAllDays = async (req: Request, res: Response) => {
  const role: string = req.role;
  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  try {
    const days: IDay[] = await Day.find();
    res.json(days);
  } catch (err) {
    console.error(err.message);
    res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};

export const getMenuDays = async (req: Request, res: Response) => {
  try {
    const days: IDay[] = await Day.find({ _menu: req.params.mid });
    if (!days) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'There is no such menu' });
    }
    res.json(days);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a menu object id' });
    }
    res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};

export const getDay = async (req: Request, res: Response) => {
  try {
    const day: IDay = await Day.findById({ _id: req.params.did });
    if (!day) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Day does not exist' });
    }
    res.json(day);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a day object id' });
    }
    res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};

export const addDay = async (req: Request, res: Response) => {
  const { menu, day, meals } = req.body;
  const dayFields = {
    menu,
    day,
    meals,
  };
  try {
    const day: IDay = new Day(dayFields);
    await day.save();
    res.json(day);
  } catch (err) {
    console.error(err.message);
    res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};

export const editDay = async (req: Request, res: Response) => {
  const id = req.params.did;
  const { menu, day, meals } = req.body;
  const dayFields = {
    menu,
    day,
    meals,
  };
  try {
    let day: IDay = await Day.findById({ _id: id });
    if (!day) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'Day does not exist' });
    }
    day = await Day.findByIdAndUpdate(
      { _id: id },
      { $set: dayFields },
      { new: true, runValidators: true }
    );
    res.json(day);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a day object id' });
    }
    res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};

export const addRecipe = async (req: Request, res: Response) => {

  const { recipe } = req.body;

  try {
    const day: IDay = await Day.findOne({'meals._id': req.params.mealid});
    const meal = day.meals.filter(m => m._id == req.params.mealid)[0];
    const index = day.meals.indexOf(meal, 0);
    meal.recipes.push(recipe);
    console.log(meal, index);
    await Day.findOneAndUpdate(
      { _id: day._id },
      { $set: {'meals.index': meal}},
      { new: true, runValidators: true }
    );
  } catch (err) {
    console.log(err.message);
  }
};

// add a recipe to a day
// delete a recipe to a day

export const deleteDay = async (req: Request, res: Response) => {
  try {
    const day: IDay = await Day.findByIdAndDelete({ _id: req.params.did });
    res.json({ msg: 'day removed', d: day });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'not a day object id' });
    }
    res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
