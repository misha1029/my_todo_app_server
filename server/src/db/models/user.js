'use strict';
import bcrypt from 'bcrypt';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {
        foreignKey: 'userId'
      });
    }
  }

  User.init({
              firstName: {
                type: DataTypes.STRING(64),
                is: /[A-Z][a-z]*/,
                allowNull: false
              },
              lastName: {
                type: DataTypes.STRING(64),
                is: /[A-Z][a-z]*/,
                allowNull: false
              },
              login: {
                type: DataTypes.STRING(64),
                is: /^[^ ^()*&|\\/]{6,16}$/,
                allowNull: false,
              },
              password: {
                type: DataTypes.STRING,
                allowNull: false,
                field:'passwordHash',
/*                set(value) {
                  bcrypt.hash(value,10).then(hash => {
                    this.setDataValue('password', hash);
                  })
                }*/
              },
              email: {
                type: DataTypes.STRING,
                unique: true,
                isEmail: true
              }
            }, {
              sequelize,
              modelName: 'User',
            });
  return User;
};