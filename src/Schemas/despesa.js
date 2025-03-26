const db = require('../ConnectionDb/db');
const { DataTypes } = require("sequelize");


const Despesa = db.define('Despesa', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeDespesa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipoDespesa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    tableName: 'despesas',
    timestamps: true // adiciona createdAt e updatedAt automaticamente
  });

  module.exports = Despesa;