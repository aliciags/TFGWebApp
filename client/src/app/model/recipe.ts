import recipeIngredient from './recipe-ingredient';

export interface Recipe {

    _id: string;
    name: string;
    timing: number;
    guest: number;
    meal: string[];
    diet: string;
    ingredients: recipeIngredient[];
    steps: string[];
    image: string;
    videoRecipe?: string;
    creator?: string;
}
