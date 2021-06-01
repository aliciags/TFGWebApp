export interface MenuCard {

    /**
     * Interface to model the Recipe Card
     * @param _id: string - day id
     * @param _idMeal: string - meal id
     * @param recipes: string[] - id of the recipes
     * @param day: string - week day
     * @param meal: string - meal of the day
     */

    _id: string;
    _idMeal: string;
    recipes: string[];
    day: string;
    meal: string;

}
