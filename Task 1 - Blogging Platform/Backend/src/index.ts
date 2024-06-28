import express from "express";
import "dotenv/config";
import "express-async-errors";
import "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import authRouter from "./routes/auth";
import blogRouter from "./routes/blog";
import { errorHandler } from "./middlewares/error";

app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Listening in PORT:" + PORT);
});
