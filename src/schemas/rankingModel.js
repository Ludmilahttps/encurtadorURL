import { connection } from "./index.js"
import { queries } from "./index.js"

export const getRankings = async () => {
  const { rows: ranking } =  await connection.query(queries.getRanking())
  if (ranking && ranking.length !== 0) {
    return ranking
  }
  return false
}