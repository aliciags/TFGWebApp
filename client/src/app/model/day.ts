import { Mealtime } from './mealtime';

export interface Day {

    /**
     * Interface to model the User
     * @param menu: string
     * @param day: string
     * @param meals: Mealtime[]
     */

    menu: string;
    day: string;
    meals: Mealtime[];

}
