const { Race } = require('../models/race')

const create = async (req, res) => {
  const newRace = await Race.create(req.body)

  res.json(newRace)
}

const getAll = async (req, res) => {
  const races = await Race.find()

  res.json(races)
}

const getById = async (req, res) => {
  const race = await Race.findById(req.params.genreId)

  res.json(race)
}

const update = async (req, res) => {
  const race = await Race.findByIdAndUpdate(req.params.genreId, req.body, {
    new: true,
  })

  res.json(race)
}

const remove = async (req, res) => {
  const race = await Race.findByIdAndDelete(req.params.genreId)

  res.json(race)
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
}
