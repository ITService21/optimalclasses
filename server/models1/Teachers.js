const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    title: String,
    name: String,
    education: String,
    contact: String,
    photo: {
      data: Buffer,
      contentType: String,
    }, // Photo stored as binary data
  });
  

module.exports = mongoose.model("Teacher", TeacherSchema);
