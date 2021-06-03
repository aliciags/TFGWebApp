import { Document, Model, Schema, model } from 'mongoose';
import { IMenu } from './Menu';
import Mealtime from '../types/Mealtime';

/**
 * Day Object to store a week meal plan. Used by the user database model.
 * @param menu: ref => Menu._id
 * @param day: string
 * @param meals: Mealtime[]
 */
export interface IDay extends Document {
    menu: IMenu['_id'];
    day: string;
    meals: Array<Mealtime>;
}

const daySchema: Schema = new Schema (
    {
        _menu: {
            type: Schema.Types.ObjectId,
            ref: 'Menu',
            required: true
        },
        day: {
            type: String,
            require: true,
            enum: {
                values: ['Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ],
                message: '{VALUE} is not a day of the week'
            }
        },
        meals: [{
            meal: {
                type: String,
                trim: true,
                enum: {
                    values: ['Breakfast',
                        'Lunch',
                        'Snack',
                        'Dinner'],
                    message: '{VALUE} is not a valid meal'
                },
                required: true
            },
            recipes: [{
                type: Schema.Types.ObjectId,
                ref: 'Recipe'
            }]
        }]
    },
    { timestamps: true }
);

const Day: Model<IDay> = model('Day', daySchema);

export default Day;