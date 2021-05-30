import { Router } from "express";

import auth from "../../middleware/auth";
import * as UserController from "../../controllers/user.controller";

const userRouter: Router = Router();

// uid is the user email

/**
 * get all users
 * GET /api/user
 * access admin
 */
userRouter.get("/", auth, UserController.getAllUsers);

/**
 * get single user by user id
 * GET /api/user/:uid
 * access private
 */
userRouter.get("/:uid", auth, UserController.getUser);

/**
 * check if user exists
 * GET /api/user/exists/:uid
 * access public
 */
userRouter.get("/exists/:uid", UserController.exists);

/**
 * add user ()
 * POST /api/user
 * access Public
 */
userRouter.post("/", UserController.addUser);

/**
 * update a user by user email
 * PUT /api/user/:uid
 * access Private
 */
userRouter.put("/:uid", auth, UserController.editUser);

/**
 * add an ingredient to the groceries list
 * PUT /api/user/ingredient/:uid&:iid
 * access Private
 */
userRouter.put("/ingredient/:uid&:iid", auth, UserController.editGroceries);

/**
 * remove a user by user id
 * DELETE /api/user/:uid
 * access Private
 */
userRouter.delete("/:uid", auth, UserController.deleteUser);

export default userRouter;