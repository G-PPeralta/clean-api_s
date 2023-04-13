import { PrismaClient } from "@prisma/client";

import { User } from "../entities/user";

export interface FetchAllUsersRequest {
  fetch(): Promise<User.User[]>;
}

export class FetchAllUsers implements FetchAllUsersRequest {
  constructor(private prisma: PrismaClient) {}

  async fetch(): Promise<User.User[]> {
    return await this.prisma.user.findMany();
  }
}
