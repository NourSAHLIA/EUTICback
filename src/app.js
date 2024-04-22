import sequelize from "./config/db.js";
import express from "express";
import authRouter from "./routes/auth.js";
import cors from "cors";
import User from "./models/admin.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
sequelize.sync();
const server = app.listen(3500, () => console.log(server.address()));

