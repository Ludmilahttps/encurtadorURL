import { Router } from "express"
import { urlMiddleware } from "../middlewares/index.js"
import { urlController } from "../controllers/index.js"

const urlRoute = Router()

urlRoute.post(
  "/urls/shorten",
  urlMiddleware.validateUrl,
  urlMiddleware.validateHeader,
  urlMiddleware.checkTokenBelongsSomeUser,
  urlController.postShortUrl
);

urlRoute.get(
  "/urls/:id",
  urlMiddleware.validateParamsId,
  urlMiddleware.checkParamsIdbelongsSomeUrl,
  urlController.getUrlById
);

urlRoute.get(
  "/urls/open/:shortUrl",
  urlMiddleware.validateParamsShortUrl,
  urlMiddleware.checkParamsShortUrlExists,
  urlController.openShortUrl
);

urlRoute.delete(
  "/urls/:id",
  urlMiddleware.validateParamsId,
  urlMiddleware.validateHeader,
  urlMiddleware.checkTokenBelongsSomeUser,
  urlMiddleware.checkParamsIdbelongsSomeUrl,
  urlMiddleware.checkUserTokenBelongsToUrlOwner,
  urlController.deleteUrl
);

export { urlRoute }