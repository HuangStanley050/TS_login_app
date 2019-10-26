import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  const { Email, Password } = req.body;

  console.log(Email);
  console.log(Password);
  res.json({ msg: "login route", data: { Email, Password } });
});

export default router;
