import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

/**
 * POST /auth/login
 * Login request
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  return res.status(200).json;
};

/**
 * POST /auth/register
 * Register request
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
