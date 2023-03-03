import { rankingModel } from "../schemas/index.js"

export const getRanking = async (req, res) => {
  try {
    const ranking = await rankingModel.getRankings()
    if (!ranking) return res.status(404).send("Ranking not found!")
    res.status(200).send(ranking)
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
}