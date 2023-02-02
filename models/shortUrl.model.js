const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    urlShortId:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('shortUrl',shortUrlSchema)