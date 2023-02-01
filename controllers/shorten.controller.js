const os = require("os");
const shortid = require('shortid');
const db = require("../models/shortUrl.model");
const shortUrl = require('../models/shortUrl.model')

function getShortUrl(req,res){
    const id = shortid.generate()
    const shortUrl = `${process.env.DOMAIN}/${id}`
    return res.status(200).json(shortUrl);

}

module.exports = {
    getShortUrl
}