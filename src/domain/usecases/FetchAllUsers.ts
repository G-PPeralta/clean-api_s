import { User } from "../entities/user";

export interface FetchAllUsersRequest {
    fetch(): Promise<User.User[]>;
}

export class FetchAllUsers implements FetchAllUsersRequest {
  
  fetch(): Promise<User.User[]> {
    return Promise.resolve([
      {
        id: "1",
        name: "Alice",
        email: "alice@example.com",
        password: "password1",
      },
      {
        id: "2",
        name: "Bob",
        email: "bob@example.com",
        password: "password2",
      },
      {
        id: "3",
        name: "Charlie",
        email: "charlie@example.com",
        password: "password3",
      },
    ]);
  }
}