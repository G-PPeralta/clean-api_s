export namespace User {
  export interface CreateUser {
    name: string;
    email: string;
    password: string;
  }

  export interface CreateUserReturn {
    name: string;
    email: string;
  }

  export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }
}
