import { connection } from "./index.js"
import { queries } from "./index.js"

export const getUserUrlsById = async (id) => {
    const { rows: data } = await connection.query(queries.getUserUrls(), [id])
    if (data && data.length !== 0) {
        return data
    }
    return false
}