// const { Sequelize ,DataTypes,Model} = require('sequelize');
// const sequelize = require('../config/db.js')
// class User extends Model {}

// User.init(
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate:{isEmail:true}
//     },
//     password: {
//       type: DataTypes.STRING(1000),
//       allowNull: false,
//     },
//   },
//   {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: 'User', // We need to choose the model name
//   },
// );

// module.exports = User