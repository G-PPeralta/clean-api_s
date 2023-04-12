import express from "express";

import { backlogRouter, uploadRouter, loginRouter, userRouter } from "./routes";
import { json } from 'body-parser';


const app = express();

app.use(json());

const port = 3000;

app.use("/login", loginRouter);

app.use("/upload", uploadRouter);

app.use("/backlog", backlogRouter);

app.use("/user", userRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
