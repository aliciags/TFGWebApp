import { IRecipe } from "../models/Recipe";

/**
 * Mealtime Object to store a week meal plan. Used by the user database model.
 * @param _id?: string - id of the nested object
 * @param meal: string - name of the meal
 * @param recipes: IRecipe["_id"][] - array with the diferent recipes
 */
 type mealtime = {
    _id?: string,
    meal: string,
    recipes: IRecipe["_id"][]
};

export default mealtime;