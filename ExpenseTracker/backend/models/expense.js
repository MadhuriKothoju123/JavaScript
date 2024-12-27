'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Expense.init({
    title: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    category: DataTypes.STRING,
    frequency: DataTypes.STRING,
    date: DataTypes.DATE,
    
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Expense',

  });
  return Expense;
};