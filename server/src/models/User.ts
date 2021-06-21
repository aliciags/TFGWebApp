import { Document, Model, Schema, model } from 'mongoose';
import { IIngredient } from './Ingredient';
import { IRecipe } from './Recipe';
import { Diet } from '../types/Diet';

/**
 * Interafce to model the User Schema
 */
export interface IUser extends Document {
    /** role of the user either admin or user */
    role: string;
    /** unique email of the user */
    email: string;
    /** hashed password of the user */
    password: string;
    /** firstname of the user */
    firstname: string;
    /** last name of the user */
    lastname: string;
    /** birth year of the user */
    birthyear: number;
    /** usual meals of the suer */
    meals: string[];
    /** eating diet either Omnivorous,
     * Vegetarian or Vegan
     */
    diet: Diet;
    // private: boolean;
    /** recipes id either created or saved by the user */
    recipes: IRecipe['_id'][];
    /** array of ingredient's name */
    groceries: IIngredient['name'][];
}

/**
 * A userSchema generates de structure of the mongoDB document
 */
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

/** day model to do the requests to the database */
const User: Model<IUser> = model('User', userSchema);

export default User;