import { Document, Model, Schema, model } from 'mongoose';
import { IUser } from './User';
import { Diet } from '../types/Diet';
import { RecipeIngredient } from '../types/RecipeIngredient';

/**
 * Recipe definition
 */
export interface IRecipe extends Document {
    /** name of the recipe */
    name: string;
    /** time to prepare the recipe in minutes */
    timing: number;
    /** number of portions with the ingredients defined */
    guest: number;
    /** meals of the recipe */
    meal: string[];
    /** diet of the recipe */
    diet: Diet;
    /** picture of the recipe */
    image: string;
    /** array of the ingredients required with the measures */
    ingredients: RecipeIngredient[];
    /** steps to do the recipe */
    steps: string[];
    /** link to the recipes video */
    videoRecipe: string;
    /** email of the creator of the recipe  */
    creator: IUser['email'];
    /** user's emails that have the recipe saved */
    saved: IUser['email'][];
}

/**
 * A recipeSchema generates de structure of the mongoDB document
 */
const recipeSchema: Schema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        timing: {
            type: Number,
            min: 0
        },
        guest: {
            type: Number,
            min: 1,
            max: 100
        },
        meal: [{
            type: String,
            required: true,
            enum: {
                values: ['Breakfast',
                    'Lunch',
                    'Snack',
                    'Dinner'],
                message: '{VALUE} is not a valid meal'
            }
        }],
        diet: {
            type: String,
            enum: {
                values: ['Omnivorous',
                    'Vegetarian',
                    'Vegan'],
                message: '{VALUE} is not a valid diet'
            },
            required: true
        },
        image: {
            type: String
        },
        ingredients: [{
            quantity : {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            ingredient: {
                type: String,
                ref: 'Ingredient',
                required: true
            }
        }],
        steps: [{
            type: String,
            required: true
        }],
        videoRecipe: { type: String },
        creator: {
            type: String,
            required: true,
            ref: 'User'
        },
        saved: [{
            type: String,
            ref: 'User'
        }]
    },
    { timestamps: true }
);

/** recipe model to do the requests to the database */
const Recipe: Model<IRecipe> = model('Recipe', recipeSchema);

export default Recipe;