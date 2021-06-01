import { Router } from "express";
import { check } from "express-validator/check";

import auth from "../../middleware/auth";
import * as DayController from "../../controllers/day.controller";

const dayRouter: Router = Router();

// did is the day id
// mid is the menu id

/**
 * get all days
 * GET api/day
 * access Admin
 */
dayRouter.get("/", auth, DayController.getAllDays);

/**
 * get all menu days
 * GET api/day/menu/:mid
 * access Private
 */
 dayRouter.get("/menu/:mid", auth, DayController.getMenuDays);

 /**
  * get a day
  * GET api/day/:did
  * access Private
  */
dayRouter.get("/:did", auth, DayController.getDay);

/**
 * add a day
 * POST api/day
 * access Private
 */
 dayRouter.post("/", auth, DayController.addDay);

 /**
  * edit a day
  * PUT api/day/:did
  * access Private
  */
dayRouter.put("/:did", auth, DayController.editDay);

/**
 * delete a day
 * DELETE api/day/:did
 * access Private
 */
dayRouter.delete("/:did", auth, DayController.deleteDay);

/**
 * add a recipe
 * PUT api/day/meal/:mealid
 * access Private
 */
dayRouter.put("/meal/:mealid", auth, DayController.addRecipe);

export default dayRouter;