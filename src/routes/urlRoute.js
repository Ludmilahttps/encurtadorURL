import { Router } from "express"
import { urlMiddleware } from "../middlewares/index.js"
import { urlController } from "../controllers/index.js"

const urlRoute = Router()

urlRoute.post(
  "/urls/shorten",
  urlMiddleware.validateUrl,
  urlMiddleware.validateHeader,
  urlMiddleware.checkToken,
  urlController.postUrl
)

urlRoute.get(
  "/urls/:id",
  urlMiddleware.validateParamsId,
  urlMiddleware.checkUrl,
  urlController.getUrlById
)

urlRoute.get(
  "/urls/open/:shortUrl",
  urlMiddleware.validateParamsUrl,
  urlMiddleware.checkUrlExists,
  urlController.openUrl
)

urlRoute.delete(
  "/urls/:id",
  urlMiddleware.validateParamsId,
  urlMiddleware.validateHeader,
  urlMiddleware.checkToken,
  urlMiddleware.checkUrl,
  urlMiddleware.checkUserUrl,
  urlController.deleteUrl
)

export { urlRoute }