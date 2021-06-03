import { Document, Model, Schema, model } from 'mongoose';
import Diet from '../types/Diet';
import { IUser } from './User';
import { IRecipe } from './Recipe';

/**
 * Interface to model the Ingredient Schema
 * @param name: string
 * @param diet: string
 * @param avgPrice: number
 * @param users: ref => User.email[]
 * @param recipes: ref => Recipe._id[]
 */
export interface IIngredient extends Document {
    name: string;
    diet: Diet;
    avgPrice: number;
    users: IUser['email'][];
    recipes: IRecipe['_id'][];
}

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
        avgPrice: {
            type: Number, 
            required: true, 
            min: 0
        },
        users: {
            type: String
        },
        recipes: {
            type: Schema.Types.ObjectId
        }
    },
    { timestamps: true }
);

const Ingredient: Model<IIngredient> = model('Ingredient', ingredientSchema);

export default Ingredient;