import { Router } from "express";
import { FetchAllUsers } from "../domain/usecases/FetchAllUsers";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginRouter = Router();

const fetchAllUsers = new FetchAllUsers();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  const users = await fetchAllUsers.fetch();

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ errors: [{ msg: "User does not exist" }] });
  }

  bcrypt.compare(
    password,
    user.password,
    (err: Error | undefined, isMatch: boolean) => {
      if (err) throw err;

      if (!isMatch) {
        console.log("isMatchDENTRODOIF", isMatch);
        return res
          .status(401)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const payload = { user: { id: user.id } };
      const secret = process.env.JWT_SECRET || "meusergredo123";

      jwt.sign(payload, secret, { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    }
  );
});

export { loginRouter };
