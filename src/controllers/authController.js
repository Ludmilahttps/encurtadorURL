import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { authModel } from "../schemas/index.js"

dotenv.config()
const EXPIRE_TIME = 24 * 60 * 60
const jwtExpire = {
  expiresIn: EXPIRE_TIME,
};

export const signUp = async (req, res) => {
  const { name, email, password } = res.locals.newUser
  const passwordCrypt = bcrypt.hashSync(password, 10)
  const user = {
    name,
    email,
    password: passwordCrypt,
  };

  try {
    await authModel.insertNewUser(user)
    res.status(201).send("Customer registered!")
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
};

export const signIn = async (req, res) => {
  const { email } = res.locals.user
  try {
    const user = await authModel.getUserByEmail(email)
    const { id: userId } = user
    const data = { userId }
    const { JWT_SECRET } = process.env
    const token = jwt.sign(data, JWT_SECRET, jwtExpire)
    res.status(200).send(token)
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
}