const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Instagram = new Schema({
  title: String,
  img: String,
  caption: String
})

module.exports = mongoose.model('Instagram', Instagram)