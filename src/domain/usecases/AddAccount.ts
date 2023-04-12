import { User } from "../entities/user";

export interface AddAccountRequest {
    add(account: User.CreateUser): User.CreateUser;
}

export class AddAccount implements AddAccountRequest {
    add = (account: User.CreateUser) => {
        return account;
    }
}