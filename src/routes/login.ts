import { Router } from "express";

const loginRouter = Router();

loginRouter.post("/", (rec, res) => {
    return res.send("logou");
})

export { loginRouter };