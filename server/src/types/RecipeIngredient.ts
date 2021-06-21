import { IIngredient } from '../models/Ingredient';

/**
 * Recipe ingredient object to store the ingredients of the recipe and its quantity
 */
export type RecipeIngredient = {
  /** quantity of the ingredient in a recipe */
  quantity: number;
  /** unit of the quantity */
  unit: string;
  /** ingredient's name */
  ingredient: IIngredient['name'];
};

// export { RecipeIngredient };
