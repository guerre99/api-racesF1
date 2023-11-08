require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')

module.exports = function (app) {
  app.use(json())
  app.use(morgan('dev'))

  // app.use('/api/users', require('./routes/users'))

  app.use('/api/pilots', require('../routes/pilots'))
  app.use('/api/races', require('../routes/races'))

  app.get('/ping', (req, res) => {
    res.send({ success: true })
  })

  app.use(require('../middlewares/errors'))
}
