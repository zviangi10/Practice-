const { Model } = require('sequilize');
const sequilize = require('../config/connection');

class Task extends Model {};

Task.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    sequilize,
    freezeTableName: true,
    underscored: true,
    modelName: 'task'
});

module.exports = Task;

