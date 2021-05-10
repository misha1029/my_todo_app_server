'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  };
  Task.init({
    value: {
      type:DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    },
    isDone: {
      type:DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    deadline: {
      type:DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: new Date()
      }
    },
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};