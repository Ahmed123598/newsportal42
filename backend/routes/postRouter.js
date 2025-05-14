const express = require('express');
const router = express.Router();
const News = require('../models/News'); // ✅ Use News model instead of Post
const auth = require('../middlewares/auth');
const multer = require('multer');

// ✅ Configure Multer for news image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '.' + file.mimetype.split('/')[1];
    cb(null, file.originalname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage });

// ✅ Get all news articles
router.get('/', async (req, res) => {
    try {
        const news = await News.findAll();
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Add news article (Requires JWT authentication)
router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
        const { title, content } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        const news = await News.create({ title, content, imageUrl });
        res.status(201).json({ message: 'News article added successfully', news });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
