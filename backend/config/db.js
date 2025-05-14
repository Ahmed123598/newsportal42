// backend/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('newsportal_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
