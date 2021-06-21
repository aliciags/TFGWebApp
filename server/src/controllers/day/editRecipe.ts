import { Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import { Request } from '../../types/Request';
import Day, { IDay } from '../../models/Day';

/**
 * Given a meal id as parameter, get the recipe id and the edit
 * operation from the body request. The value should be either
 * add or delete.
 *
 * With the meal id it gets the day document, then it searches for the meal
 * index position in the array and next, for the index position of the recipe
 * in the meal recipes array.
 *
 * If adding the recipe, it is already in the list, returns an error, if not, it
 * addes the recipe to the array, and updates the document.
 *
 * If deleting the recipe, it is not in the list, returns an error, if not, it
 * deletes the recipe, and updates the document.
 * @param req request param: meal id, body: { recipe, edit }
 * @param res response<msg>
 * @returns promise response<msg>
 */
export const editRecipe = async (req: Request, res: Response) => {

  const { recipe, edit } = req.body;

  try {
    /** Look for day by the meal id in the database
     * lookfor the meal in the day
     * get the meal index
     * lookfor the recipe in the meal
     * get the recipe index
     */
    const day: IDay = await Day.findOne({ 'meals._id': req.params.mealid });
    const meal = day.meals.filter((m) => m._id == req.params.mealid)[0];
    const indexM = day.meals.indexOf(meal, 0);
    const indexR = day.meals[indexM].recipes.indexOf(
      day.meals[indexM].recipes.filter((r) => r == recipe)[0],
      0
    );

    switch (edit) {
      case 'add':
        /** Adding a recipe */
        if (indexR > -1) {
          /** the recipe is in the list: error */
          return res
            .status(HttpStatusCodes.BAD_REQUEST)
            .json({ msg: 'recipe already in the meal' });
        } else {
          /** the recipe is not in the list: add it */
          meal.recipes.push(recipe);
          day.meals[indexM] = meal;
        }
        break;
      case 'delete':
        /** Deleting a recipe */
        if (indexR > -1) {
          /** the recipe is in the list: delete it */
          meal.recipes.splice(indexR, 1);
          day.meals[indexM] = meal;
        } else {
          /** the recipe is not in the list: error */
          return res
            .status(HttpStatusCodes.BAD_REQUEST)
            .json({ msg: 'recipe does not exist' });
        }
        break;
      default:
        /** No valid edit option */
        return res
          .status(HttpStatusCodes.BAD_REQUEST)
          .json({ msg: 'invalid operation' });
    }

    /** uptade document either if a recipe is added or deleted */
    await Day.findOneAndUpdate(
      { _id: day._id },
      { $set: day },
      { new: true, runValidators: true }
    );

    return res.json({ msg: 'update sucessfully' });
  } catch (err) {
    console.log(err.message);

    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
