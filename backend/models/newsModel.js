const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Category = require("./categoryModel");

const News = sequelize.define("News", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  publisherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Category, key: "id" },
  },
  publishedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
  tableName: "news",
});

// Associations
News.belongsTo(Category, { foreignKey: "categoryId", as:"category" });
Category.hasMany(News, { foreignKey: "categoryId", as: "news" });

module.exports = News;
