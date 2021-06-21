import config from 'config';
import { Response, NextFunction } from 'express';
import HttpStatusCodes from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { Payload } from '../types/Payload';
import { Request } from '../types/Request';

/**
 * This function is the authorization middleware.
 * The jsonwebtoken library allows verifying the validity of the token.
 * It gives acces to the user if authorized, or returns a 401 error
 * when there is no token, the token is not valid or the session has expired
 *
 * The token should be found in the request's header.
 * @param req request
 * @param res response
 * @param next next request
 * @returns whether a user is authorized or not
 */
export default function(req: Request, res: Response, next: NextFunction) {
  /**  Get token from header */
  const token = req.header('x-auth-token');

  /** Check if no token */
  if (!token) {
    return res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: 'No token, authorization denied' });
  }
  /** Verify token */
  try {
    const payload: Payload | any = jwt.verify(token, config.get('jwtSecret'));
    req.userId = payload.userId;
    req.role = payload.role;
    next();
  } catch (err) {
    /** invalid token or session expired (1h) */
    res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: 'Token is not valid' });
  }
}
