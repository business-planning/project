const express = require('express')
const App = express()
const port = 8080
const router = require('./UserRoute') 
const cors = require('cors')

// App.options('*',cors())
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({extended : false}))
App.use('/user', router)

App.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})
