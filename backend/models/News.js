const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class News extends Model {}

News.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      // allowNull defaults to true
    },
    image: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'News', // We need to choose the model name
  },
);

module.exports=News