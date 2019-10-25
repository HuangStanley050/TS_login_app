import express, { Request, Response } from "express";
import authRouter from "./routes/loginRoutes";

const app = express();

app.use("/api", authRouter);

export default app;
