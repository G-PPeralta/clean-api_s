import { User } from "../entities/user";
import { FetchAllUsers } from "./FetchAllUsers";

export interface AddAccountRequest {
    add(account: User.CreateUser): User.CreateUser;
}

export class AddAccount implements AddAccountRequest {
    constructor (private readonly fetchAllUsers: FetchAllUsers) {

    }

    add = (account: User.CreateUser) => {
        account = {
            name: 'Eve',
            email: 'eve@example.com',
            password: 'password5'
          }
        const users = this.fetchAllUsers.fetch();
        users.push({
            id: '5',
            ...account
        })
        return account;
    }
}