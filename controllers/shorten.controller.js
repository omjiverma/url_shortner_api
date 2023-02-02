const shortid = require("shortid");
const shortUrlModel = require("../models/shortUrl.model");

async function createShortenedUrl(req, res) {
  try {
    const shortId = shortid.generate();
    const { url } = req.body;

    const shortUrl = await shortUrlModel.create({
      originalUrl:url,
      urlShortId: shortId,
    });

    const shortenedUrl = `${process.env.DOMAIN}/${shortUrl.urlShortId}`
    res.status(200).json({ shortenedUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating shortened URL" });
  }
}

module.exports = {
  createShortenedUrl,
};