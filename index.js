const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
require('./Db')
const router = require('../server/routes/userRoutes')
const PORT = 5000
app.use('/' , router)

app.listen(PORT , ()=>{
console.log(`Port is running at server ${PORT}`)
})


