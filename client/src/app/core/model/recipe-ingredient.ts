/**
 * Mealtime Object to store a week meal plan. Used by the user database model.
 * @param quantity: string - quantity of the ingredient in a recipe
 * @param unit: string - unit of the quantity
 * @param ingredient: string - ingredient's name
 */
type recipeIngredient = {
  quantity: string;
  unit: string;
  ingredient: string;
};

export default recipeIngredient;
