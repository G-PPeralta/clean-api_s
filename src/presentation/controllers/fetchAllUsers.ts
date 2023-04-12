import { HttpResponse } from "../protocols/http";
import { Controller } from "../protocols/controller";
import { FetchAllUsers } from "../../domain/usecases/FetchAllUsers";
import { serverError, ok } from "../helpers/http-helper";

export class FetchAllUserController implements Controller {
  constructor(private readonly fetchAllUsers: FetchAllUsers) {}

  async handle(): Promise<HttpResponse> {
    try {
      const users = await this.fetchAllUsers.fetch();
      return ok(users);
    } catch (error) {
      return serverError();
    }
  }
}
