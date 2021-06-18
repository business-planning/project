const Sequelize = require('sequelize');

const db = new Sequelize('waleeddb', 'root', '', {
  host: 'localhost',
  dialect:'mysql' 
});


module.exports = db