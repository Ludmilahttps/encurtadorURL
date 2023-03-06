import { Router } from "express"
import { userController } from "../controllers/index.js"
import { urlMiddleware } from "../middlewares/index.js"

const userRoute = Router()

userRoute.get(
  "/users/me",
  urlMiddleware.validateHeader,
  urlMiddleware.checkToken,
  userController.getUserLinks
)

export { userRoute }