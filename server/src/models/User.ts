import { Document, Model, Schema, model } from 'mongoose';
import Diet from '../types/Diet';
import { IIngredient } from './Ingredient';
import { IRecipe } from './Recipe';

/**
 * Interafce to model the User Schema
 * @param role: string
 * @param email:string
 * @param password: string
 * @param firstname: string
 * @param lastname: string
 * @param birthyear: number
 * @param numberMeals: number
 * @param meals: string[]
 * @param diet: string
 * @param private: boolean
 * @param recipes: ref => Recipe._id[]
 * @param groceries: ref => Ingredient.name[]
 */
export interface IUser extends Document {
    role: string;
    email: string;
    password: string;
    firstname: string;  // useless
    lastname: string;   // useless
    birthyear: number;  // useless
    numberMeals: number;
    meals: string[];
    diet: Diet;
    private: boolean;
    recipes: IRecipe['_id'][];
    groceries: IIngredient['name'][];
}

const userSchema: Schema = new Schema(
    {
        role: {
            type: String,
            require: true,
            enum: [
                'admin',
                'user'
            ],
            default: 'user'
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            validate: {
                validator: function(e: string) {
                    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(e);
                },
                message: (props: any) => `${props.value} is not a valid email`
            }
        },
        password: {
            type: String,
            required: true,
            /*validate: {
                validator: function(p: string) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/.test(p);
                },
                message: (props: any) => `${props.value} is not a valid password, 8 chars, min, mayus, numer, special char`
            }*/
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String
        },
        birthyear: {
            type: Number,
            required: true,
            min: 1900,
            max: 2021
        },
        numberMeals: {
            type: Number,
            required: true,
            min: 2,
            max: 5
        },
        meals: [{
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
        private: {
            type: Boolean,
            required: true, 
            default: false
        },
        recipes: [{
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }],
        groceries: [{
            type: String,
            ref: 'Ingredient'
        }],
    },
    { timestamps: true }
);

const User: Model<IUser> = model('User', userSchema);

export default User;