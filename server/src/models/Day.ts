import { Document, Model, Schema, model } from 'mongoose';
import { IMenu } from './Menu';
import { Mealtime } from '../types/Mealtime';
import { WeekDays } from 'WeekDays';

/**
 * A day is a part of a menu with the different meals defined
 */
export interface IDay extends Document {
    /** ref: menu object id */
    menu: IMenu['_id'];
    /** day of the week */
    day: WeekDays;
    /** meals of the the day */
    meals: Array<Mealtime>;
}

/**
 * A daySchema generates de structure of the mongoDB document
 */
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

/** day model to do the requests to the database */
const Day: Model<IDay> = model('Day', daySchema);

export default Day;
