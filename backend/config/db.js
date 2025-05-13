const { Sequelize } = require('sequelize'); // Import Sequelize

const sequelize = new Sequelize('newsportal', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// ✅ Test the database connection

module.exports = sequelize;
