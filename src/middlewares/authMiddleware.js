import { stripHtml } from "string-strip-html"
import bcrypt from "bcrypt"
import { authModel } from "../schemas/index.js"

export const checkEmail = async (request, response, next) => {
  const { email } = response.locals.newUser
  
  const emailExists = await authModel.emailExists(email)
  if (emailExists) return response.status(409).send("Email already exists!")
  next()
  return true
}

export const valSignUp = (request, response, next) => {
  const Body = authModel.signupSchema.validate(request.body)

  if (Body.error) return response.status(422).send("Some error with JSON body")
  
  const newUser = {
    name: stripHtml(Body.value.name).result,
    email: stripHtml(Body.value.email).result,
    password: Body.value.password,
    confirmPassword: Body.value.confirmPassword,
  };

  const validateBody = authModel.signupSchema.validate(newUser)
  if (validateBody.error) {
    return response
      .status(422)
      .send("Some error with JSON body envolving HTML tags")
  }

  response.locals.newUser = newUser
  next()
  return true
}

export const valSignIn = (request, response, next) => {
  const Body = authModel.signinSchema.validate(request.body)

  if (Body.error) return response.status(422).send("Some error with JSON body")
 
  const user = {
    email: Body.value.email,
    password: Body.value.password,
  }

  response.locals.user = user
  next()
  return true
}

export const checkPassword = async (request, response, next) => {
  const { email, password } = response.locals.user
  const passwordCrypt = await authModel.getPasswordEmail(email)
  if (!passwordCrypt)return response.status(401).send("Email or password wrong!")
  
  const IsValid = bcrypt.compareSync(password, passwordCrypt)
  if (!IsValid) return response.status(401).send("Email or password wrong!")
  next()
  return true
}