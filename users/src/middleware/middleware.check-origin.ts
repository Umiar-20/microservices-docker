import { NextFunction, Request, Response } from "express";

export async function middlewareCheckOrigin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.headers.host === "localhost:5000") {
    next();
  }

  return res.status(403).send("Forbidden, You are not allowed here");
}
