import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send("this is login route");
});

export default router;
