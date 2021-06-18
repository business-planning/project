const express = require('express')
const App = express()
const port = 8080
const router = require('./UserRoute')
const cors = require('cors')
const db = require('../models')
const { user, Address,Company,Credentials, Phone } = require('../models')

App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: false }))
App.use('/user', router)


db.sequelize.sync().then(res => {
    App.listen(port, () => {
        console.log(`you are running seuelize port : ${port}`)
    })
})