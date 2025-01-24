const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  });

module.exports = mongoose.model("Image", imageSchema);
