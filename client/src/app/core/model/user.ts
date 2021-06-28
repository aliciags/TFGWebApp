export interface User {

    /**
     * Interface to model the User
     * @param email: string
     * @param password: string
     * @param firstname: string
     * @param lastname: string
     * @param birthyear: number
     * @param meals: string[]
     * @param diet: string
     * @param recipes: ref => Recipe._id[]
     * @param groceries: ref => Ingredient.name[]
     */

    firstname: string;
    lastname: string;
    email: string;
    password?: string;
    meals: string[];
    diet: string;
    birthyear: number;
    recipes?: [];
    groceries?: [];

}
