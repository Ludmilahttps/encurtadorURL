import { response } from "express"
import { rankingModel } from "../schemas/index.js"

export const getRanking = async (request, response) => {
  try {
    const ranking = await rankingModel.getRankings()
    if (!ranking) return response.status(404).send("Ranking not found!")
    response.status(200).send(ranking)
  } catch (error) {
    response
      .status(500)
      .send(`Internal system error.`)
  }
}