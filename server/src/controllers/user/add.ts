import bcrypt from 'bcryptjs';
import config from 'config';
import HttpStatusCodes from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { Payload } from '../../types/Payload';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * Creates and add a user to the database.
 * To secure the connection the password is hashed before saved in the database.
 * @param req request body: { email, password, firstname, lastname, birthyear,
 * numberMeals, meals, diet, recipes, groceries, role}
 * @param res response jwt
 * @returns promise response jwt
 */
export const add = async (req: Request, res: Response) => {

  const {
    email,
    password,
    firstname,
    lastname,
    birthyear,
    numberMeals,
    meals,
    diet,
    recipes,
    groceries,
    role,
  } = req.body;

  try {
    let user: IUser = await User.findOne({ email: email });

    if (user) {
      res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // user object based on IUser
    const userFields = {
      role,
      email,
      password: hashed,
      firstname,
      lastname,
      birthyear,
      numberMeals,
      meals,
      diet,
      recipes,
      groceries,
    };

    user = new User(userFields);
    const payload: Payload = {
      userId: user.id,
      role: user.role,
    };

    await user.save();
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: config.get('jwtExpiration') },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
