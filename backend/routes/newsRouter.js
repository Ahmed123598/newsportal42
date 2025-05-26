const express = require("express");
const router = express.Router();
const News = require("../models/newsModel");
const authenticateJWT = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const Category = require("../models/categoryModel"); // ✅ Import Category model

router.get("/dashboard", authenticateJWT, async (req, res) => {
    try {
        const totalNews = await News.count();
        const indiaNews = await News.count({ where: { categoryId: 4 } });
        const worldNews = await News.count({ where: { categoryId: 3 } });
        const sportsNews = await News.count({ where: { categoryId: 1 } });
        const businessNews = await News.count({ where: { categoryId: 2 } });

        res.json({
            totalNews,
            indiaNews,
            businessNews,
            sportsNews,
            worldNews
        });

    } catch (error) {
        console.error("❌ Error fetching dashboard data:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//  Upload News Article with Image
router.post("/upload", authenticateJWT, upload.single("image"), async (req, res) => {
    try {
        console.log("🔍 Incoming Request Body:", req.body);
        console.log("📷 Uploaded File:", req.file);

        const { title, description, categoryId, publisherName, content } = req.body;

        if (!title || !description || !categoryId || !publisherName || !content || !req.file) {
            console.error("❌ Missing fields:", req.body);
            return res.status(400).json({ message: "❌ All fields including image are required." });
        }

        const imagePath = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        console.log("📝 SQL INSERT DATA:", { title, description, categoryId, publisherName, content, imagePath });

        const newNews = await News.create({
            title,
            description,
            categoryId,
            publisherName,
            content,
            image: imagePath,
            publishedAt: new Date(),
        });

        console.log("✅ News Successfully Added:", newNews);

        // await Category.increment("totalNews", { by: 1, where: { id: categoryId } });
        res.status(201).json({ message: "✅ News created successfully!", news: newNews });
    } catch (error) {
        console.error("❌ Error adding news:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});


// Fetch All News
router.get("/", async (req, res) => {
    try {
        const news = await News.findAll();
        console.log("✅ News fetched successfully:", news);
        res.json(news);

        news.forEach(item => console.log("Image URL:", item.image));
    } catch (error) {
        console.error("❌ Error fetching news:", error);
        res.status(500).json({ message: "Internal server error", details: error.message });
    }
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Convert categoryId to a number to ensure proper query execution
    const news = await News.findAll({ where: { categoryId: Number(categoryId) } });

    if (!news.length) {
      return res.status(404).json({ message: `❌ No news found for categoryId: ${categoryId}` });
    }

    res.json(news);
  } catch (error) {
    console.error("❌ Error fetching news by categoryId:", error);
    res.status(500).json({ message: "Internal server error", details: error.message });
  }
});








// router.get('/india',async(req,res)=>{
//  const indiaNews= await News.findAll({where:{categoryId:4}})
//  res.json(indiaNews)
// })
// router.get('/world',async(req,res)=>{
//  const worldNews= await News.findAll({where:{categoryId:3}})
//  res.json(worldNews)
// })
// router.get('/sports',async(req,res)=>{
//  const SportsNews= await News.findAll({where:{categoryId:1}})
//  res.json(SportsNews)
// })
// router.get('/business',async(req,res)=>{
//  const businessNews= await News.findAll({where:{categoryId:2}})
//  res.json(businessNews)
// })
// Fetch News by ID
router.get('/:id', async (req, res) => {
    try {
        const newsId = parseInt(req.params.id, 10);

        if (!newsId || isNaN(newsId)) {
            return res.status(400).json({ message: 'Invalid news ID' });
        }

        const newsItem = await News.findByPk(newsId);

        if (!newsItem) {
            return res.status(404).json({ message: 'News article not found' });
        }

        res.status(200).json(newsItem);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// ✅ Delete a News Article
router.delete("/:id", authenticateJWT, async (req, res) => {
    try {
        const newsId = parseInt(req.params.id, 10);

        if (!newsId || isNaN(newsId)) {
            return res.status(400).json({ message: "❌ Invalid news ID" });
        }

        const newsItem = await News.findByPk(newsId);

        if (!newsItem) {
            return res.status(404).json({ message: "❌ News article not found" });
        }

        await newsItem.destroy(); // ✅ Deletes the article from database
        res.json({ message: "✅ News article deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting news:", error);
        res.status(500).json({ message: "Internal server error", details: error.message });
    }
});
// ✅ Update/Edit a News Article
router.put("/:id", authenticateJWT, async (req, res) => {
    try {
        const newsId = parseInt(req.params.id, 10);
        const { title, content, publisherName, categoryId, description, image } = req.body;

        const newsItem = await News.findByPk(newsId);
        if (!newsItem) {
            return res.status(404).json({ message: "❌ News article not found" });
        }

        await newsItem.update({ title, content, publisherName, categoryId, description, image }); // ✅ Updates news

        res.json({ message: "✅ News article updated successfully", newsItem });
    } catch (error) {
        console.error("❌ Error updating news:", error);
        res.status(500).json({ message: "Internal server error", details: error.message });
    }
});




module.exports = router;
