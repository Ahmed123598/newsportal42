const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // ✅ Import JWT
const bcrypt = require('bcrypt'); // ✅ Import bcrypt for password hashing
const sequelize = require('./config/db.js'); // ✅ Correct path
// const sequelize = require('./db');
// const db = require('./config/db.json'); // If it's a JSON file



const User = require('./models/User'); // ✅ Import User model
const News = require('./models/News'); // ✅ Import News model
// const authenticateJWT = require('./middleware/authMiddleware.js'); // ✅ Import JWT middleware
const authenticateJWT = require('./middlewares/auth'); // ✅ Correct path

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Sync Database Models
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');
    } catch (error) {
        console.error('❌ Database connection error:', error);
        process.exit(1);
    }
};

connectDB();


const syncDb = async () => {
    try {
        await sequelize.sync({ alter: true }); // ✅ Use `alter: true` to update models without dropping tables
        console.log('✅ All models were synchronized successfully.');
    } catch (error) {
        console.error('❌ Database sync error:', error);
    }
};
syncDb();

// ✅ API to Get All News Articles
app.get('/news', async (req, res) => {
    try {
        const news = await News.findAll();
        res.json(news);
    } catch (error) {
        console.error('❌ Error fetching news:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// ✅ User Login API with JWT Authentication
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Find user in the database
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // ✅ Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

        // ✅ Generate JWT token
        const token = jwt.sign({ id: user.id, firstName: user.firstName }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('❌ Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// ✅ Protected Route Example (Requires JWT)
app.get('/dashboard', authenticateJWT, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!', user: req.user });
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});

