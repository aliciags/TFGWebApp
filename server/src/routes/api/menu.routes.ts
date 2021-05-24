import { Router } from "express";

import auth from "../../middleware/auth";
import * as MenuController from "../../controllers/menu.controller";

const menuRouter: Router = Router();

//mid is the menu id
//uid is the user email

/**
 * get all menus
 * GET /api/menu
 * access admin
 */
menuRouter.get("/", auth, MenuController.getAllMenus);

/**
 * get all user menus
 * GET api/menu/user/:uid
 * access Private
 */
menuRouter.get("/user/:uid", auth, MenuController.getAllUserMenus);

/**
 * get a menu
 * GET api/menu/:mid
 * access Private
 */
menuRouter.get("/:mid", auth, MenuController.getMenu);

/**
 * add a menu
 * POST api/menu
 * access Private
 */
menuRouter.post("/", auth, MenuController.addMenu);

/**
 * edit a menu
 * PUT api/menu/:mid
 * access Private
 */
menuRouter.put("/:mid", auth, MenuController.editMenu);

/**
 * delete a menu
 * DELETE api/menu/:mid
 * access Private
 */
menuRouter.delete("/:mid", auth, MenuController.deleteMenu);

export default menuRouter;