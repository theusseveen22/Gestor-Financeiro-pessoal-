const { DataTypes } = require("sequelize");

const Receita = sequelize.define('Receita', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeReceita: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipoReceita: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    quitado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  }, {
    tableName: 'receitas',
    timestamps: true // adiciona createdAt e updatedAt automaticamente
  });

  module.exports = Receita;