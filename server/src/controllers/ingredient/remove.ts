import HttpStatusCodes from 'http-status-codes';
import { Response } from 'express';
import { Request } from '../../types/Request';
import Ingredient, { IIngredient } from '../../models/Ingredient';

/**
 * If administrator removes an ingredient.
 * @param req request: ingredient name
 * @param res response<msg, IIngredient>
 * @returns promise response<msg, IIngredient>
 */
export const remove = async (req: Request, res: Response) => {

  const role: string = req.role;
  if (role !== 'admin') {
    return res.status(HttpStatusCodes.FORBIDDEN).json({ msg: 'Access denied' });
  }

  try {
    const ingredient: IIngredient = await Ingredient.findOneAndDelete({
      name: req.params.iid,
    });
    return res.json({ msg: 'ingredient removed', ing: ingredient });
  } catch (err) {
    console.error(err.message);
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
};
