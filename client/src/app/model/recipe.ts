export interface Recipe {

    name: string;
    timing: number;
    guest: number;
    meal: string[];
    diet: string;
    ingredients: string[];
    steps: string[];
    image: string;
    videoRecipe?: string;
    creator?: string;
}
