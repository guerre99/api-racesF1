const { Pilot } = require('../models/pilot')

const getAll = async (req, res) => {
  const pilots = await Pilot.find()

  res.json(pilots)
}

const getById = async (req, res) => {
  const pilot = await Pilot.findById(req.params.genreId)

  res.json(pilot)
}

const create = async (req, res) => {
  const newPilot = await Pilot.create(req.body)

  res.json(newPilot)
}

const update = async (req, res) => {
  const pilot = await Pilot.findByIdAndUpdate(req.params.genreId, req.body, {
    new: true,
  })

  res.json(pilot)
}

const remove = async (req, res) => {
  const pilot = await Pilot.findByIdAndDelete(req.params.genreId)

  res.json(pilot)
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
