import { Router } from "express"
import { authMiddleware } from "../middlewares/index.js"
import { authController } from "../controllers/index.js"

const authRoute = Router()

authRoute.post(
  "/signup",
  authMiddleware.valSignUp,
  authMiddleware.checkEmail,
  authController.signUp
)

authRoute.post(
  "/signin",
  authMiddleware.valSignIn,
  authMiddleware.checkPassword,
  authController.signIn
)

export { authRoute }