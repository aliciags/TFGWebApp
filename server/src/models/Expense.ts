import { Document, Model, Schema, model } from 'mongoose';
import { IIngredient } from './Ingredient';
import { IUser } from './User';

/**
 * Menu Object to store a week meal plan
 */
export interface IExpense extends Document {
    /**  ref: user email */
    user: IUser['email'];
    /** date of the expense */
    date: Date;
    /** array of the ingredients bought */
    ingredients: IIngredient['name'][];
    /** expense of the purchase */
    expense: number;
    // estExpense: number;
}

/**
 * A menuSchema generates de structure of the mongoDB document
 */
const expenseSchema: Schema = new Schema (
    {
        _user: {
            type: String,
            required: true,
            ref: 'User'
        },
        date: {
            type: Date,
            require: true,
            default: Date.now()
        },
        ingredients: [{
            type: String,
            ref: 'Ingredient'
        }],
        expense: {
            type: Number,
            require: true
        }
        /* estExpense: {
                type: Number,
                required: true
           }
        */
    },
    { timestamps: true }
);

/** menu model to do the requests to the database */
const Menu: Model<IExpense> = model('Expense', expenseSchema);

export default Menu;