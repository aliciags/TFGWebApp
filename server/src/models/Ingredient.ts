import { Document, Model, Schema, model } from 'mongoose';
import { Diet } from '../types/Diet';
import { IUser } from './User';
import { IRecipe } from './Recipe';

/**
 * Ingredient required to make recipes,
 * also found in the users groceries list
 */
export interface IIngredient extends Document {
    /** unique name of the ingredient */
    name: string;
    /** diet of the ingredient  */
    diet: Diet;
    // avgPrice: number;
}

/**
 * An ingredientSchema generates de structure of the mongoDB document
 */
const ingredientSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
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
        /* avgPrice: {
            type: Number,
            required: true,
            min: 0
        } */
    },
    { timestamps: true }
);

/**  ingredient model to do the requests to the database */
const Ingredient: Model<IIngredient> = model('Ingredient', ingredientSchema);

export default Ingredient;