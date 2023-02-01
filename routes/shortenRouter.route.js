const express = require("express");
const { getShortUrl } = require("../controllers/shorten.controller");
const shortenRouter = express.Router();

shortenRouter.post("/",getShortUrl);

module.exports = shortenRouter;
