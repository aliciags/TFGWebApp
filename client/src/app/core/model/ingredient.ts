export interface Ingredient {

    /**
     * Interface to model an ingredient
     * @param _id: string - mongo ingredient id
     * @param name: string - name of the ingredient
     * @param diet: string - category which the ingredient is part of
     * @param avgPrice: number - average price of he ingredient
     */

    _id: string;
    name: string;
    diet: string;
    avgPrice: number;

}
