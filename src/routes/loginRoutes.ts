import { Router, Request, Response } from "express";

const password = "secret";
const email = "test@test.com";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router
  .post("/login", (req: RequestWithBody, res: Response) => {
    const { Email, Password } = req.body;

    if (Email && Password && Email === email && Password === password) {
      req.session = { loggedIn: true };
      res.json({ msg: "login success" });
    } else {
      res.status(401).json({ msg: "login failed" });
    }
  })
  .get("/protect", (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
      res.json({ msg: "You have hit the protected route" });
    } else {
      res.status(401).json({
        msg: "You are not loggedin"
      });
    }
  });

export default router;
