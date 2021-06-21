import { IRecipe } from '../models/Recipe';

/**
 * Mealtime Object to store a week meal plan
 */
export type Mealtime = {
  /** unique id of the mealtime */
  _id?: string;
  /** name of the meal
   * possible values
   * Breakfast, Lunch, Snack or Dinner
   */
  meal: string;
  /** array with the different recipes of a meal */
  recipes: IRecipe['_id'][];
};
