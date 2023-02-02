const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, 'Please provide url'],
  },
  urlShortId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("shortUrl", shortUrlSchema);
