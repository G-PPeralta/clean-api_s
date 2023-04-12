import { User } from "../entities/user";
import { encodePassword } from "../../utils/encode_password";
import { PrismaClient } from "@prisma/client";

export interface AddAccountRequest {
  add(account: User.CreateUser): Promise<User.CreateUserReturn>;
}

export class AddAccount implements AddAccountRequest {
  constructor(private prisma: PrismaClient) {}

  add = async (account: User.CreateUser) => {
    await this.prisma.user.create({
      data: {
        name: account.name,
        email: account.email,
        password: encodePassword(account.password),
      },
    });
    const { password, ...result } = account;
    return result;
  };
}
