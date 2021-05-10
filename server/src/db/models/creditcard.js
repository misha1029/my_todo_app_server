'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreditCard.init({
                    number: {
                      type: DataTypes.STRING(16),
                      allowNull: false,
                      validate: {
                        isCreditCard: true,
                      }
                    },
                    expire: {
                      type: DataTypes.DATE,
                      allowNull: false,
                      validate: {
                        isAfter: new Date()
                      }
                    },
                    cvc: {
                      type: DataTypes.STRING(3),
                      validate: {
                        is: /^[0-9]{3}$/
                      }

                    },
                    balance: {
                      type: DataTypes.DOUBLE,

                    }
                  }, {
                    sequelize,
                    modelName: 'CreditCard',
                    timestamps: false,
                    tableName: 'creditcards',
                    schema: 'sandbox',
                  });
  return CreditCard;
};