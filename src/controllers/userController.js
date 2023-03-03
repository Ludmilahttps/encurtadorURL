import { userModel } from "../schemas/index.js"

export const getUserLinks = async (req, res) => {
  const { id } = res.locals
  try {
    const data = await userModel.getUserUrlsById(id)
    res.status(200).send(data)
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
}