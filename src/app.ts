import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import authRouter from "./routes/loginRoutes";

import path from "path";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(
  cookieSession({
    name: "app",
    keys: ["super"]
  })
);
app.use("/api", authRouter);
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

export default app;
