import { Router } from "express";

const loginRouter = Router();

loginRouter.post("/", (req, res) => {
    return res.send("logou");
})

export { loginRouter };