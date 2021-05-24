import { Router } from "express";
import { check } from "express-validator/check";

import auth from "../../middleware/auth";
import * as AuthController from "../../controllers/auth.controller";

const router: Router = Router();

/**
 * Get authenticated user given the token
 * GET api/auth
 * access Private
 */
router.get("/", auth, AuthController.authenticate);

/**
 * Login user and get token
 * POST api/auth
 * access Public 
 */
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  AuthController.login);

export default router;