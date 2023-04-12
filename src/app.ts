import express from "express";

import { backlogRouter, uploadRouter } from "./routes";

const app = express();

const port = 3000;

app.post("/upload", uploadRouter);

app.use("/backlog", backlogRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
