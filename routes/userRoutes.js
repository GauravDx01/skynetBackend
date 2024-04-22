const express = require('express')
const router = express.Router()

const {nonVerified} = require('../controllers/nonVerfiedApi')
const {verified} = require('../controllers/VerifiedApi')
const {getNonVerifiedData}  = require('../controllers/getNonVerfied')
const {delUser} = require('../controllers/delUser')
const {signUp}  = require('../controllers/signUp')
const {login}  = require('../controllers/loginUser')
router.post('/nonVerified' , nonVerified)
router.post('/verified' , verified)
router.get('/getData' , getNonVerifiedData)
router.delete('/delUser/:id' , delUser)
router.post('/signup' , signUp)
router.post('/login' , login)

module.exports = router