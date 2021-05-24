import { IRecipe } from "../models/Recipe";

/**
 * Mealtime Object to store a week meal plan. Used by the user database model.
 * @param meal:string
 * @param recipe:IRecipe["_id"][]
 */
 type mealtime = { 
    meal: string, 
    recipe: IRecipe["_id"][]
};

export default mealtime;