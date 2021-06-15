const Mysql = require('mysql')

const db = Mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database:'waleeddb'
})

module.exports = db