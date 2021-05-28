export interface RecipeCard {

    /**
     * Interface to model the Recipe Card
     * @param recipe: string - id of the recipe
     * @param day: string - week day
     * @param meal: string - meal of the day
     * @param cols: number - col position of the card
     * @param rows: number - row position of the card
     */

    recipe: string;
    day: string;
    meal: string;
    cols: number;
    rows: number;

}
