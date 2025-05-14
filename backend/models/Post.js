const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.js');   
const User=require('./User.js')
const User = require('./User.js'); // Import the User model
class Post extends Model {}

Post.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull defaults to true
    },
    filePath:{
        type:DataTypes.STRING,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'User',
            key:'id'
        }
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Post', // We need to choose the model name
  },
);

User.hasMany(Post)
Post.belongsTo(User)

module.exports = Post; // Export the Post model