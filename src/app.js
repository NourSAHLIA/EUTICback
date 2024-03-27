import express from "express";
import authRouter from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);

const server = app.listen(3500, () => console.log(server.address()));
