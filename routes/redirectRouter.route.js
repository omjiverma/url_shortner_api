const express = require("express");
const redirectRouter = express.Router();
const redirectShortUrl = require('../controllers/redirect.controller')

redirectRouter.get("/:shortid",redirectShortUrl);

module.exports = redirectRouter;