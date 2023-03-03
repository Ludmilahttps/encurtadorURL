import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { urlModel } from "../schemas/index.js"
import { urlController } from "../controllers/index.js"

dotenv.config()

export const validateUrl = (req, res, next) => {
  const validate = urlModel.urlSchema.validate(req.body)
  if (validate.error) {
    return res
      .status(422)
      .send(`Some error with JSON body: ${validate.error.message}`)
  }

  const url = {
    url: validate.value.url,
  }

  res.locals.url = url
  next()
  return true
}

export const validateHeader = (req, res, next) => {
  const headerValidation = urlModel.tokenSchema.validate(req.headers)
  if (headerValidation.error) {
    return res
      .status(401)
      .send(`Invalid token: ${headerValidation.error.message}`)
  }

  const token = {
    token: headerValidation.value.authorization.split(" ")[1],
  }

  res.locals.token = token
  next()
  return true
}

export const checkTokenBelongsSomeUser = (req, res, next) => {
  const { token } = res.locals.token
  const { JWT_SECRET } = process.env

  try {
    const { userId } = jwt.verify(token, JWT_SECRET)
    res.locals.id = userId
    next()
    return true
  } catch (error) {
    res
      .status(404)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
};

export const validateParamsId = (req, res, next) => {
  const id = Number(req.params.id)
  const NotANumber = isNaN(id)
  const isInteger = Number.isInteger(id)
  if (NotANumber || !isInteger)
    return res.status(404).send("id is not a integer number!")

  res.locals.urlId = id
  next()
  return true
};

export const checkParamsIdbelongsSomeUrl = async (req, res, next) => {
  const { urlId } = res.locals
  try {
    const response = await urlModel.getUrlsById(urlId)
    if (!response) return res.status(404).send("id doesn't belong any url!")

    res.locals.response = response
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }

  next()
  return true
};

export const validateParamsShortUrl = (req, res, next) => {
  const { shortUrl } = req.params
  const invalidSize = shortUrl.length !== urlController.NANOID_PARAM

  if (invalidSize) return res.status(422).send("Invalid shortUrl sent!")

  res.locals.shortUrl = shortUrl
  next()
  return true
};

export const checkParamsShortUrlExists = async (req, res, next) => {
  const { shortUrl } = res.locals;

  try {
    const idExists = await urlModel.getUrlIdByShortUrl(shortUrl);
    if (!idExists) return res.status(404).send("ShortUrl does not exist!")
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
  next()
  return true
};

export const checkUserTokenBelongsToUrlOwner = async (req, res, next) => {
  const userTokenId = res.locals.id
  const { urlId } = res.locals
  try {
    const tokenIdIsValid = await urlModel.getUserIdByUrlIdAndTokenId(
      urlId,
      userTokenId
    );
    if (!tokenIdIsValid)
      return res.status(401).send("Token does not belong to the url sent!")
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }

  next()
  return true
}