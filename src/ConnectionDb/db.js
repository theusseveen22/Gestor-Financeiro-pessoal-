const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize('projetofinanceiro', process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306
});

module.exports = db;