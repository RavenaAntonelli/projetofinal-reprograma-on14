const express = require('express')
const cors = require('cors')
require('dotenv-safe').config()


const db = require('./database/projetoConfig')

const professionalRoutes =require('./routes/professionalRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/professional', professionalRoutes)
app.use('/user', userRoutes)
db.connect() 

module.exports = app

