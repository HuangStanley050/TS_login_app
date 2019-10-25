import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/loginRoutes";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", authRouter);

export default app;
