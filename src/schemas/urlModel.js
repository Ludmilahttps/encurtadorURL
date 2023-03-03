import joi from "joi"
import { connection } from "./index.js"
import { queries } from "./index.js"

export const insertInUrls = async (urlObject) => {
  const { shortUrl, url } = urlObject;
  const inserted = await connection.query(queries.insertUrl(), [url, shortUrl]);
  if (inserted) return true
  return false
}

export const getUrlIdByShortUrl = async (shortUrl) => {
  const { rows: id } = await connection.query(queries.getUrlIdbyshortUrl(), [
    shortUrl,
  ]);
  if (id && id.length !== 0) {
    return id[0].id
  }
  return false
}

export const getshortUrlByUrlAndUserId = async (userId, url) => {
  const { rows: shortUrl } = await connection.query(
    queries.getshortUrlByUserIdAndUrl(),
    [url, userId]
  )
  if (shortUrl && shortUrl.length !== 0) {
    return shortUrl[0].shortUrl
  }
  return false
}

export const insertInUrlsUsers = async (urlId, userId) => {
  const inserted = await connection.query(queries.insertUrlsUsers(), [
    urlId,
    userId,
  ]);
  if (inserted) return true;
  return false
}

export const getUrlsById = async (id) => {
  const { rows: url } = await connection.query(queries.getUrlById(), [id]);
  if (url && url.length !== 0) {
    return url[0]
  }
  return false
}

export const getVisitsCountByShortUrl = async (shortUrl) => {
  const { rows: sum } = await connection.query(
    queries.getVisitCountByShortId(),
    [shortUrl]
  );
  if (sum && sum.length !== 0) {
    return sum[0]
  }
  return false
}

export const updateVisitCountByShortUrl = async (newVisitCount, shortUrl) => {
  const updated = await connection.query(queries.updateVisitCount(), [
    newVisitCount,
    shortUrl,
  ]);
  return updated
}

export const getUserIdByUrlIdAndTokenId = async (urlId, tokenId) => {
  const { rows: userId } = await connection.query(queries.getUserIdByUrlid(), [
    urlId,
    tokenId,
  ])
  if (userId && userId.length !== 0) {
    return userId[0].userId
  }
  return false
}

export const deleteUrlById = async (id) => {
  const deleted = await connection.query(queries.deleteUrl(), [id])
  return deleted
}

export const deleteUrlsUsersByUrlId = async (urlId) => {
  const deleted = await connection.query(queries.deleteUrlsUsers(), [urlId])
  return deleted
}

export const urlSchema = joi.object({
  url: joi
    .string()
    .pattern(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    )
    .required(),
})

export const tokenSchema = joi
  .object({
    authorization: joi
      .string()
      .pattern(/^Bearer .+$/)
      .required(),
  })
  .unknown(true)