import { Request, Response } from "express";

export async function getAllUser(req: Request, res: Response) {
  return res.json({ users: ["meghan", "Venus", "Jupiter"] });
}
