const Sequilize = require('sequilize');
require('dotenv').config();

const sequilize = new Sequilize (process.env.PIKACHU_DB,
    process.env.PIKACHU_USER,
    process.env.PIKACHU_PW,
    
{
  host: 'localhost',
  dialect: 'postgres'
}
)


module.exports = sequilize;