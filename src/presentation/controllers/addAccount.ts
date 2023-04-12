import { Controller } from "../protocols/controller";
import { AddAccount } from "../../domain/usecases/AddAccount";
import { ok, serverError } from "../helpers/http-helper";
import { HttpRequest } from "../protocols/http";

export class AddAccountController implements Controller {
  constructor(private readonly addAccount: AddAccount) {}

  handle = async (httpRequest: HttpRequest) => {
    try {
      const newUser = await this.addAccount.add(httpRequest.body);
      return ok(newUser);
    } catch (error) {
      return serverError();
    }
  };
}
