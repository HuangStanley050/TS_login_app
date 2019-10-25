import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.json({ msg: "login route", data: { email, password } });
});

export default router;
