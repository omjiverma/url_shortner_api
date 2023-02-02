const shortUrl = require("../models/shortUrl.model");

async function redirectShortUrl(req, res) {
  try {
    const { shortid } = req.params;
    const shortUrlRecord = await shortUrl.findOne({ urlShortId: shortid });
    if (!shortUrlRecord) {
      return res.status(404).json({ error: "Short URL not found" });
    }
    res.redirect(shortUrlRecord.originalUrl);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the URL" });
  }
}

module.exports = redirectShortUrl;
