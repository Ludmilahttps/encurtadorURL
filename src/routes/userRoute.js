import { Router } from "express"
import { userController } from "../controllers/index.js"
import { urlMiddleware } from "../middlewares/index.js"

const userRoute = Router()

userRoute.get(
  "/users/me",
  urlMiddleware.validateHeader,
  urlMiddleware.checkTokenBelongsSomeUser,
  userController.getUserLinks
)

export { userRoute }