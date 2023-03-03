import { nanoid } from "nanoid"
import { urlModel } from "../schemas/index.js"

export const NANOID_PARAM = 10

export const postShortUrl = async (req, res) => {
  const userId = res.locals.id
  const { url } = res.locals.url
  const shortUrl = nanoid(NANOID_PARAM)
  const urlObject = {
    url,
    shortUrl,
  };

  try {
    const shortUrlAlreadyExists = await checkUrlAlreadyPosted(userId, url)
    if (shortUrlAlreadyExists) {
      return res.status(201).send({ shortUrl: shortUrlAlreadyExists })
    }

    await urlModel.insertInUrls(urlObject)
    const urlId = await urlModel.getUrlIdByShortUrl(shortUrl)
    await urlModel.insertInUrlsUsers(urlId, userId)
    res.status(201).send({ shortUrl })
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
};

export const getUrlById = (req, res) => {
  const { response } = res.locals
  res.status(200).send(response)
};

export const openShortUrl = async (req, res) => {
  const { shortUrl } = res.locals
  try {
    const { visitCount, url } = await urlModel.getVisitsCountByShortUrl(
      shortUrl
    );
    const addVisitCount = Number(visitCount) + 1
    await urlModel.updateVisitCountByShortUrl(addVisitCount, shortUrl)
    res.redirect(url)
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
};

export const deleteUrl = async (req, res) => {
  const { urlId } = res.locals;
  try {
    await urlModel.deleteUrlsUsersByUrlId(urlId)
    await urlModel.deleteUrlById(urlId)
    res.status(204).send("Url deleted with sucess!")
  } catch (error) {
    res
      .status(500)
      .send(`Internal system error.\n More details: ${error.message}`)
  }
}

const checkUrlAlreadyPosted = async (userId, url) => {
  const shortUrlExists = await urlModel.getshortUrlByUrlAndUserId(userId, url)
  return shortUrlExists
}