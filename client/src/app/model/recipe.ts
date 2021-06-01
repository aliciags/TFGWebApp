export interface Recipe {

    _id: string;
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
