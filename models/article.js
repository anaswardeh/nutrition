const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true }, 
  url: { type: String, required: true },
  image: {type: String, required: false},
  uid: { type: String, required: true },
  saveNow: { type: Date, default: Date.now },
  synopsis: { type: String, required: false }
});

const article = mongoose.model("article", articleSchema);

module.exports = article;