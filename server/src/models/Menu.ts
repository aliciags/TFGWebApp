import { Document, Model, Schema, model } from 'mongoose';
import { IUser } from './User';

/**
 * Menu Object to store a week meal plan
 */
export interface IMenu extends Document {
    /** ref: user email */
    user: IUser['email'];
    /** title of a menu */
    title: string;
    /** description of a menu */
    description: string;
}

/**
 * A menuSchema generates de structure of the mongoDB document
 */
const menuSchema: Schema = new Schema (
    {
        _user: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
);

/** menu model to do the requests to the database */
const Menu: Model<IMenu> = model('Menu', menuSchema);

export default Menu;