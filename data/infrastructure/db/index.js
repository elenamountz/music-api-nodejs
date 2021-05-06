const Sequelize = require('sequelize');
const { dbName, dbUser, dbPassword, dbHost } = require('../../../config');

const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = db;