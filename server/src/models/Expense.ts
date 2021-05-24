import { Document, Model, Schema, model } from "mongoose";
import { IIngredient } from "./Ingredient";
import { IUser } from "./User";

/**
 * Menu Object to store a week meal plan. Used by the user database model.
 * @param user: ref => User.email
 * @param date: date
 * @param ingredients:IIngredient["name"][]
 * @param expense: number
 * @param estExpense: number
 * //bill picture
 */
export interface IExpense extends Document {
    user: IUser["email"];
    date: Date;
    ingredients: IIngredient["name"][];
    expense: number;
    estExpense: number;
}

const expenseSchema: Schema = new Schema (
    {
        _user: {
            type: String,
            required: true,
            ref: "User"
        },
        date: {
            type: Date,
            require: true,
            default: Date.now()
        },
        ingredients: [{
            type: String,
            ref: "Ingredient"
        }],
        expense: {
            type: Number,
            require: true
        },
        estExpense: {
            type: Number, 
            required: true
        }
    },
    { timestamps: true }
);

const Menu: Model<IExpense> = model("Expense", expenseSchema);

export default Menu;