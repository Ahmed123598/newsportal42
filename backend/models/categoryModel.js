const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  totalNews: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
}, {
  timestamps: true,
  tableName: "categories",
});

module.exports = Category;
