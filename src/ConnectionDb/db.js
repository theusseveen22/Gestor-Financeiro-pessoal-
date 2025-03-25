const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = Sequelize('projetofinanceiro', process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306
});

module.exports = sequelize;