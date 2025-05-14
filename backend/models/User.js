// models/User.js

const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = require('../db'); // ✅ Ensure db.js exists in backend/
const sequelize = require('../config/db');


class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // ✅ Unique constraint for email
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(1000), // Can be kept large for hashed passwords
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Optional: explicitly set table name
    timestamps: false,  // Disable createdAt and updatedAt fields
  }
);

// Optional: Use sync only during development
(async () => {
  try {
    await User.sync(); // You can use { force: true } to reset table
    console.log('✅ User model synced successfully');
  } catch (err) {
    console.error('❌ Error syncing User model:', err);
  }
})();

module.exports = User;
