require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = require("./config/db");

// ✅ Import models
const User = require("./models/userModel");
const News = require("./models/newsModel");
const Category = require("./models/categoryModel");

// ✅ Import routes
const userRoutes = require("./routes/UserRouter");
const newsRoutes = require("./routes/postRouter");

// ✅ Import authentication middleware
const authenticateJWT = require("./middlewares/auth");

const app = express();
const port = process.env.PORT || 3000;

// ✅ Middleware Setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve uploaded files (This ensures image URLs work)
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // ✅ Added here

// ✅ Database Connection
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected successfully.");
    } catch (error) {
        console.error("❌ Database connection error:", error);
        process.exit(1);
    }
};
connectDB();

// ✅ Sync Models
const syncDb = async () => {
    try {
        await sequelize.sync({ alter: true }); // ✅ Ensures models stay updated
        console.log("✅ Database models synchronized.");
    } catch (error) {
        console.error("❌ Database sync error:", error);
    }
};
syncDb();

// ✅ Simple Test Route (`GET /`)
app.get("/", (req, res) => {
    res.json({ message: "🚀 Server is running!" });
});

// ✅ Mount Routes
app.use("/users", userRoutes);
app.use("/news", newsRoutes);

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: "User not found" });

        if (user.password !== password) { // ✅ Direct string comparison, no hashing
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("❌ Login error:", error);
        res.status(500).json({ message: error.message });
    }
});

// ✅ Protected Dashboard API
app.get("/dashboard", authenticateJWT, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ message: "Welcome to the dashboard!", user });
    } catch (error) {
        console.error("❌ Dashboard error:", error);
        res.status(500).json({ message: error.message });
    }
});

app.get("/categories", async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
