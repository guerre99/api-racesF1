const mongoose = require('mongoose')
const { body } = require('express-validator')

const pilotSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  image: { type: String },
  nationality: { type: String, required: true },
  wins: { type: Number, required: true },
  championships: { type: Number },
  podiums: { type: Number },
  debut_date: { type: Date, required: true },
  retirement_date: { type: Date },
})

const Pilot = mongoose.model('Pilot', pilotSchema)

exports.Pilot = Pilot
