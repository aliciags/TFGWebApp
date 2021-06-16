import { IIngredient } from '../models/Ingredient';

/**
 * Recipe ingredient object to store the ingredients of the recipe and its quantity
 * @param quantity: number - quantity of the ingredient in a recipe
 * @param unit: string - unit of the quantity
 * @param ingredient: IIngredient["name"] - ingredient's name
 */
type recipeIngredient = {
  quantity: number;
  unit: string;
  ingredient: IIngredient['name'];
};

export default recipeIngredient;