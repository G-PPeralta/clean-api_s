import { Router } from "express";
import { FetchAllUsers } from "../domain/usecases/FetchAllUsers";
import { AddAccount } from "../domain/usecases/AddAccount";
import { FetchAllUserController } from "../presentation/controllers/fetchAllUsers";
import { AddAccountController } from "../presentation/controllers/addAccount";
import { serverError } from "../presentation/helpers/http-helper";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userRouter = Router();

const fetchAllUsers = new FetchAllUsers(prisma);
const fetchAllUsersController = new FetchAllUserController(fetchAllUsers);

const addAccount = new AddAccount(prisma);
const addAccountController = new AddAccountController(addAccount);

userRouter.get("/", async (req, res) => {
  try {
    const users = await fetchAllUsersController.handle();
    return res.status(users.statusCode).json(users.body);
  } catch (error) {
    return serverError();
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const newUser = await addAccountController.handle(req);
    return res.status(newUser.statusCode).json(newUser);
  } catch (error) {
    return serverError();
  }
});

export { userRouter };
