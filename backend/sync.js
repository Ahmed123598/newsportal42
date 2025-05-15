const sequelize = require("./config/db");
const News = require("./models/newsModel");
const Category = require("./models/categoryModel");
const User = require("./models/userModel");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync tables
    console.log("Database & tables synced successfully!");
  } catch (error) {
    console.error("Error syncing database:", error);
  } finally {
    process.exit();
  }
};

syncDatabase();
