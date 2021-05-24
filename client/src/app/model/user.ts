export interface User {

    /**
     * Interafce to model the User Schema
     * @param email:string
     * @param firstname: string
     * @param lastname: string
     * @param birthyear: number 
     * @param numberMeals: number 
     * @param meals: string[]
     * @param diet: string
     * @param recipes: ref => Recipe._id[]
     * @param groceries: ref => Ingredient.name[]
     */
       
    firstname: string;
    lastname: string;
    email: string;
    meals: string[];
    diet: string;
    numberMeals: number;
    birthyear: number;
    recipes: [];
    groceries: [];

}
