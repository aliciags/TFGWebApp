import bcrypt from 'bcryptjs';
import config from 'config';
import { Response } from 'express';

import { validationResult } from 'express-validator/check';
import HttpStatusCodes from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { Payload } from '../../types/Payload';
import { Request } from '../../types/Request';
import User, { IUser } from '../../models/User';

/**
 * This functions enables user login.
 * Checks if the email and password are valid.
 * Checks if the user exists and the password matches.
 * Generates and return a json web token.
 *
 * In case of an error the status and a message are specified in the response.
 *
 * @param req request with email and password
 * @param res response with the token or error
 * @returns promise response
 */
export const login = async (req: Request, res: Response) => {

    /** Cheks if the email and the password is valid */
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ msg: errors.array });
    }

    const { email, password } = req.body;

    try {

        /** check if user exists */
        const user: IUser = await User.findOne({ email: email });

        if (!user) {
            return res
            .status(HttpStatusCodes.BAD_REQUEST)
            .json({ msg: 'Invalid Credentials' });
        }

        /** verify password match */
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
            .status(HttpStatusCodes.BAD_REQUEST)
            .json({ msg: 'Invalid Credentials' });
        }

        /** generate resonse payload */
        const payload: Payload = {
            userId: user._id,
            role: user.role,
        };

        /** generates and returns jwtoken */
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
