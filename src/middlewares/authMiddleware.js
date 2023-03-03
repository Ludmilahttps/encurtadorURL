import { stripHtml } from "string-strip-html"
import bcrypt from "bcrypt"
import { authModel } from "../schemas/index.js"

export const checkEmail = async (req, res, next) => {
  const { email } = res.locals.newUser;
  const emailExists = await authModel.emailAlreadyExists(email)
  if (emailExists) {
    return res.status(409).send("Email already exists!")
  }
  next()
  return true
}

export const validateSignUp = (req, res, next) => {
  const validateBody = authModel.signupSchema.validate(req.body)
  if (validateBody.error) {
    return res.status(422).send("Some error with JSON body")
  }

  const newUser = {
    name: stripHtml(validateBody.value.name).result,
    email: stripHtml(validateBody.value.email).result,
    password: validateBody.value.password,
    confirmPassword: validateBody.value.confirmPassword,
  };

  const validateStrippedBody = authModel.signupSchema.validate(newUser)
  if (validateStrippedBody.error) {
    return res
      .status(422)
      .send("Some error with JSON body envolving HTML tags")
  }

  res.locals.newUser = newUser
  next()
  return true
}

export const validateSignIn = (req, res, next) => {
  const validateBody = authModel.signinSchema.validate(req.body)
  if (validateBody.error) {
    return res.status(422).send("Some error with JSON body")
  }
  const user = {
    email: validateBody.value.email,
    password: validateBody.value.password,
  };

  res.locals.user = user
  next()
  return true
}

export const checkPassword = async (req, res, next) => {
  const { email, password } = res.locals.user
  const passwordCrypt = await authModel.getPasswordByEmail(email)
  if (!passwordCrypt) {
    return res.status(401).send("Email or password wrong!")
  }
  
  const passwordIsValid = bcrypt.compareSync(password, passwordCrypt)
  if (!passwordIsValid) {
    return res.status(401).send("Email or password wrong!")
  }
  next()
  return true
}