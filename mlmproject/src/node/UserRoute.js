const express = require('express')
const Router = express.Router()
const {User,Address,Company,Credentials,Phone,Profile} = require('../models')
// const models = require('../models')

Router.get('/insert',(req,res)=>{
    // User.create({
    //     Userid: 1,
    //     Username:'waleed',
    //     Email: 'firstavenue@gmail.com',
    // }).catch(err =>{
    //     if(err){
    //         console.log(err)
    //     }
    // })
    Address.create({
        Userid: 1,
        Street:'5a2 4k churangee karachi',
        City: 'first avenue',
    }).catch(err =>{
        if(err){
            console.log(err)
        }
    })
    Company.create({
        Userid: 1,
        Name:'my Own company',
        location:'mera apna ghar'
    }).catch(err =>{
        err && err
    })
    Credentials.create({
        Userid: 1,
        firstName:'waleed',
        Password:'password'
    }).catch(err =>{
        err && err
    })

    Phone.create({
        Userid: 1,
        tel: 012
    })
    Profile.create({
        // Userid: 1,
        Username:'waleed'
    }).catch(err =>{
        err && err
    })
    res.send('inserted')
})


Router.get('/all',(req,res)=>{
        Credentials.findAll(
            {
        include:[Profile]
    }
    ).then(all => res.send(all))
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