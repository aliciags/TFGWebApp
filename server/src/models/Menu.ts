import { Document, Model, Schema, model } from "mongoose";
import { IUser } from "./User";

/**
 * Menu Object to store a week meal plan. Used by the user database model.
 * @param user: ref => User.email
 * @param title: string
 * @param description: string
 */
export interface IMenu extends Document {
    user: IUser["email"];
    title: string;
    description: string;
}

const menuSchema: Schema = new Schema (
    {
        _user: {
            type: String,
            required: true
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
);

const Menu: Model<IMenu> = model("Menu", menuSchema);

export default Menu;