const Sequilize = require('sequilize');

const sequilize = new Sequilize (
    "todo_app_db",
    "postgres",
    "annatai123",
{
  host: 'localhost',
  dialect: 'postgres'
}
)


module.exports = sequilize;