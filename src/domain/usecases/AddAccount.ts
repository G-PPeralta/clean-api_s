import { User } from "../entities/user";
import { FetchAllUsers } from "./FetchAllUsers";

export interface AddAccountRequest {
    add(account: User.CreateUser): Promise<User.CreateUser>;
}

export class AddAccount implements AddAccountRequest {
    constructor (private readonly fetchAllUsers: FetchAllUsers) {

    }

    add = async (account: User.CreateUser) => {
        account = {
            name: 'Eve',
            email: 'eve@example.com',
            password: 'password5'
          }
        const users = await this.fetchAllUsers.fetch();
        users.push({
            id: '5',
            ...account
        })
        return Promise.resolve(account);
    }
}