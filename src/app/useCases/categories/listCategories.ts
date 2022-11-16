import { Request, Response } from "express";

import { Category } from "../../models/Category";

export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    return res.json(categories);
  } catch {
    res.sendStatus(500);
  }
};
