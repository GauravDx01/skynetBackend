const express = require('express')
const router = express.Router()

const {nonVerified} = require('../controllers/nonVerfiedApi')
const {verified} = require('../controllers/VerifiedApi')
const {getNonVerifiedData}  = require('../controllers/getNonVerfied')
const {delUser} = require('../controllers/delUser')
router.post('/nonVerified' , nonVerified)
router.post('/verified' , verified)
router.get('/getData' , getNonVerifiedData)
router.delete('/delUser/:id' , delUser)

module.exports = router