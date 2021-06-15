const express = require('express')
const Router = express.Router()
const db = require('./db')

db.connect(err => {
    if (err) {
        throw err
    }
    console.log('Sql connected')
})



Router.post('/login', (req, res) => {
    const Username = req.body.username
    const Password = req.body.password
   
    db.query(`SELECT * FROM credentials WHERE username='${Username}' AND password = '${Password}'`,
        (err,result)=>{
        if(err){
            throw err
           
        }
        res.send(result)
        console.log('you are login')
        })
})

module.exports = Router