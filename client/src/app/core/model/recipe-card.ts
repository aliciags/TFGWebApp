export interface RecipeCard {

    /**
     * Interface to model the Recipe Card
     * @param _id: string - recipe id
     * @param name: string - name of the recipe
     * @param meals[]: string[] - meals of the recipe
     * @param diet: string - diet of the recipe
     */

    _id: string;
    name: string;
    meals: string[];
    diet: string;

}
