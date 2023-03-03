import { Router } from "express"
import { authRoute } from "./authRoute.js"
import { rankingRoute } from "./rankingRoute.js"
import { urlRoute } from "./urlRoute.js"
import { userRoute } from "./userRoute.js"

const router = Router()
router.use(authRoute)
router.use(urlRoute)
router.use(rankingRoute)
router.use(userRoute)

export default router