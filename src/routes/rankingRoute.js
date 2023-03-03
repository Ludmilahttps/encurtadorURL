import { Router } from "express"
import { rankingController } from "../controllers/index.js"

const rankingRoute = Router()
rankingRoute.get("/ranking", rankingController.getRanking)

export { rankingRoute }