const mongoose = require('mongoose')
const { body } = require('express-validator')

const raceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Date, required: true },
  image: { type: String },
  description: { type: String },
  date: { type: Date, required: true },
  podium: {
    first_position: { type: mongoose.ObjectId, ref: 'Pilot' },
    second_position: { type: mongoose.ObjectId, ref: 'Pilot' },
    third_position: { type: mongoose.ObjectId, ref: 'Pilot' },
    required: true,
  },
  resume: { type: String },
})
const Race = mongoose.model('Race', raceSchema)

// Investica como crear un validador que comprueba que los 3 pilotos son diferentes
// BONUS: Trata con express validator de también verificar que las id pasadas corresponden con ids que tienen pilotos existentes en la db
const raceValidation = [
  body('name').notEmpty().isString().exists(),
  body('year').notEmpty().isISO8601('yyyy').exists(),
  body('image').isString(),
  body('description').isString(),
  body('date').notEmpty().isISO8601('yyyy-mm-dd').exists(),
  body('podium').notEmpty().isObject().exists(),
  body('podium.first_position').notEmpty().exists(),
  body('podium.second_position').notEmpty().exists(),
  body('podium.third_position').notEmpty().exists(),
  body('resume').isString(),
]

exports.Race = Race
exports.raceValidation = raceValidation
