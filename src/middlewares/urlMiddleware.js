import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { urlModel } from "../schemas/index.js"
import { urlController } from "../controllers/index.js"
import { request, response } from "express"

dotenv.config()

export const validateUrl = (request, response, next) => {
  const validate = urlModel.urlSchema.validate(request.body)
  if (validate.error) {
    return response
      .status(422)
      .send(`Some error with JSON body: ${validate.error.message}`)
  }

  const url = { url: validate.value.url, }
  response.locals.url = url
  next()
  return true
}

export const validateHeader = (req, response, next) => {
  const Validation = urlModel.tokenSchema.validate(request.headers)

  if (Validation.error) {
    return response
      .status(401)
      .send(`Invalid token: ${Validation.error.message}`)
  }

  const token = { token: Validation.value.authorization.split(" ")[1],}
  response.locals.token = token
  next()
  return true
}

export const checkToken = (request, response, next) => {
  const { token } = response.locals.token

  try {
    const { userId } = jwt.verify(token)
    response.locals.id = userId
    next()
    return true
  } catch (error) {
    response
      .status(404)
      .send(`Internal system error.`)
  }
}

export const validateParamsId = (request, response, next) => {
  const id = Number(request.params.id)
  const NotANumber = isNaN(id)
  const isInteger = Number.isInteger(id)
  if (NotANumber || !isInteger) return response.status(404).send("id is not a integer number!")
  response.locals.urlId = id
  next()
  return true
}

export const checkUrl = async (request, response, next) => {
  const { urlId } = response.locals
  try {
    const response = await urlModel.getUrlId(urlId)
    if (!response) return response.status(404).send("id doesn't belong any url!")

    response.locals.response = response
  } catch (error) {
    response
      .status(500)
      .send(`Internal system error.`)
  }

  next()
  return true
}

export const validateParamsUrl = (request, response, next) => {
  const { shortUrl } = request.params
  const invalidSize = shortUrl.length !== urlController.NANOID_PARAM

  if (invalidSize) return response.status(422).send("Invalid shortUrl sent!")
  response.locals.shortUrl = shortUrl
  next()
  return true
}

export const checkUrlExists = async (request, response, next) => {
  const { shortUrl } = response.locals;

  try {
    const idExists = await urlModel.getShortUrl(shortUrl);
    if (!idExists) return response.status(404).send("ShortUrl does not exist!")
  } catch (error) {
    response
      .status(500)
      .send(`Internal system error.`)
  }
  next()
  return true
}

export const checkUserUrl = async (request, response, next) => {
  const userTokenId = response.locals.id
  const { urlId } = response.locals
  try {
    const IsValid = await urlModel.getUserId(
      urlId,
      userTokenId
    )
    if (!IsValid) return response.status(401).send("Token does not belong to the url sent!")
  } catch (error) {
    response
      .status(500)
      .send(`Internal system error.`)
  }

  next()
  return true
}