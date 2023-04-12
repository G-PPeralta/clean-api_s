import { User } from "../entities/user";
import { FetchAllUsers } from "./FetchAllUsers";
import { encodePassword } from "../../utils/encode_password";

export interface AddAccountRequest {
  add(account: User.CreateUser): Promise<User.CreateUser>;
}

export class AddAccount implements AddAccountRequest {
  constructor(private readonly fetchAllUsers: FetchAllUsers) {}

  add = async (account: User.CreateUser) => {
    const users = await this.fetchAllUsers.fetch();
    users.push({
      id: "5",
      name: account.name,
      email: account.email,
      password: encodePassword(account.password),
    });
    return Promise.resolve(account);
  };
}
