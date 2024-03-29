import * as bcrypt from "bcryptjs";

export function encodePassword(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}
