import { Document, Model, Schema, model } from 'mongoose';
import Diet from '../types/Diet';
import { IIngredient } from './Ingredient';
import { IUser } from './User';
import RecipeIngredient from '../types/RecipeIngredient';

/**
 * Interface to model the Recipe Schema
 * @param name: string
 * @param timing: number
 * @param guest: number
 * @param meal: string[]
 * @param diet: string
 * @param image: buffer
 * @param ingredients: RecipeIngredient[]
 * @param steps: string[]
 * @param videoRecipe: string
 * @param creator: ref => User.email
 * @param saved: ref => User.email[]
 */
export interface IRecipe extends Document {
    name: string;
    timing: number;
    guest: number;
    meal: string[];
    diet: Diet;
    image: Buffer;
    ingredients: RecipeIngredient[];
    steps: string[];
    videoRecipe: string;
    creator: IUser['email'];
    saved: IUser['email'][];
}

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
            type: String,
            data: Buffer
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

const Recipe: Model<IRecipe> = model('Recipe', recipeSchema);

export default Recipe;