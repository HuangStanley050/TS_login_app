import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { Email, Password } = req.body;
  if (Email && Password) {
    res.json({ msg: "login route", data: { Email, Password } });
  } else {
    res.json({ msg: "Not valid for email and password" });
  }
});

export default router;
