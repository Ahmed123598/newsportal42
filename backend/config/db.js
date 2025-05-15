const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables

const sequelize = new Sequelize("newsportal_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Disable logging for cleaner output
});

module.exports = sequelize;
