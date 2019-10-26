import { Router, Request, Response, NextFunction } from "express";

const password = "secret";
const email = "test@test.com";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    return next();
  }
  res.status(403);
  res.json({ msg: "You are not authorized" });
};

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
  .get("/protect", requireAuth, (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
      res.json({ msg: "You have hit the protected route" });
    } else {
      res.status(401).json({
        msg: "You are not loggedin"
      });
    }
  });

export default router;
