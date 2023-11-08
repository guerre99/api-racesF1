const { raceValidation } = require('../models/race')
const raceController = require('../controllers/races')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParams')
const validate = require('../middlewares/validate')

// const auth = require('../middlewares/auth')
// const admin = require('../middlewares/admin')

const { Router } = require('express')

const router = Router()

router.get('/', /*auth,*/ raceController.getAll)
router.get(
  '/:raceId',
  /*auth,*/
  mongoIdFromParamValidation('raceId'),
  validate,
  raceController.getById
)
router.post('/', raceValidation, validate, raceController.create)
router.put(
  '/:raceId',
  //   auth,
  //   admin,
  mongoIdFromParamValidation('raceId'),
  raceValidation,
  validate,
  raceController.update
)
router.delete(
  '/:raceId',
  //   auth,
  //   admin,
  mongoIdFromParamValidation('raceId'),
  validate,
  raceController.remove
)

module.exports = router
