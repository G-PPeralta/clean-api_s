import { User } from "../entities/user";

export interface FetchAllUsersRequest {
    fetch(): User.User[];
}

export class FetchAllUsers implements FetchAllUsersRequest {
    fetch = () => {
        const users: User.User[] = [
            {
              id: '1',
              name: 'Alice',
              email: 'alice@example.com',
              password: 'password1'
            },
            {
              id: '2',
              name: 'Bob',
              email: 'bob@example.com',
              password: 'password2'
            },
            {
              id: '3',
              name: 'Charlie',
              email: 'charlie@example.com',
              password: 'password3'
            },
            {
              id: '4',
              name: 'David',
              email: 'david@example.com',
              password: 'password4'
            },
          ];

        return users;
    }
}