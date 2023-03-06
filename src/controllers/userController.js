import { response } from "express"
import { userModel } from "../schemas/index.js"

export const getUserLinks = async (req, response) => {
  const { id } = response.locals
  try {
    const data = await userModel.getUserUrlsById(id)
    response.status(200).send(data)
  } catch (error) {
    response
      .status(500)
      .send(`Internal system error.`)
  }
}