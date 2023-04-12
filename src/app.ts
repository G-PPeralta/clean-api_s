import express from "express";

import { backlogRouter, uploadRouter, loginRouter, userRouter } from "./routes";

const app = express();

const port = 3000;

app.post("/upload", uploadRouter);

app.use("/backlog", backlogRouter);

app.use("/login", loginRouter);

app.use("/user", userRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
