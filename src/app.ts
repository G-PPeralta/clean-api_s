import express from "express";

import { backlogRouter, uploadRouter, loginRouter } from "./routes";

const app = express();

const port = 3000;

app.post("/upload", uploadRouter);

app.use("/backlog", backlogRouter);

app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
