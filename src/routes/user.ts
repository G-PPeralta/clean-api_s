import { Router } from "express";
import { FetchAllUsers } from "../domain/usecases/FetchAllUsers";
import { FetchAllUserController } from "../presentation/controllers/fetchAllUsers";
import { serverError } from "../presentation/helpers/http-helper";

const userRouter = Router();

const fetchAllUsers = new FetchAllUsers();
const fetchAllUsersController = new FetchAllUserController(fetchAllUsers);

userRouter.get("/", async (req, res) => {
    try {
        const users = await fetchAllUsersController.handle();
        return res.status(users.statusCode).json(users.body);
    } catch (error) {
        return serverError();
    }
})

export { userRouter };