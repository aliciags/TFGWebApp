import { Mealtime } from './mealtime';

export interface Day {

    /**
     * Interface to model a day
     * @param _id: string - mongo day id
     * @param menu: string - menu id which the day belongs to
     * @param day: string - name of the week day
     * @param meals: Mealtime[] - array with the meals of the day and the recipes
     */

    _id: string;
    menu: string;
    day: string;
    meals: Mealtime[];

}
