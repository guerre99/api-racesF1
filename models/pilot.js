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

const raceValidation = [
  body('name').notEmpty().isString().exists(),
  body('image').isString(),
  body('nationality').notEmpty().exists(),
  body('wins').notEmpty().isInt().exists(),
  body('championships').isInt(),
  body('podiums').isInt(),
  body('debut_date').notEmpty().isISO8601('yyyy-mm-dd').exists(),
  body('retirement_date').isISO8601('yyyy-mm-dd'),
]

exports.Pilot = Pilot
exports.raceValidation = raceValidation
