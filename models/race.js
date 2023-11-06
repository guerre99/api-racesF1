const mongoose = require('mongoose')
const { body } = require('express-validator')

const raceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  image: { type: String },
  description: { type: String },
  date: { type: Date, required: true },
  podium: {
    first_position: { type: String, required: true },
    second_position: { type: String, required: true },
    third_position: { type: String, required: true },
  },
  resume: { type: String },
})
const Race = mongoose.model('Race', raceSchema)

exports.Race = Race
