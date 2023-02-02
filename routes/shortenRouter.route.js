const express = require("express");
const { createShortenedUrl } = require("../controllers/shorten.controller");
const shortenRouter = express.Router();

shortenRouter.post("/",createShortenedUrl);

module.exports = shortenRouter;
