const express = require("express");
const router = express.Router();
const News = require("../models/newsModel");
const authenticateJWT = require("../middlewares/auth");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const upload = require("../middlewares/upload");
// ✅ Ensure the uploads folder exists
const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


// ✅ Get all news articles
router.get("/", async (req, res) => {
  try {
    const news = await News.findAll();
    res.json(news);
  } catch (error) {
    console.error("❌ Error fetching news:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// ✅ Add News Article Route with Image Upload
router.post("/upload", authenticateJWT, upload.single("image"), async (req, res) => {
    try {
        console.log("🔍 Incoming request body:", req.body);
        console.log("📷 Uploaded file details:", req.file);

        const { title, content, publisherName, categoryId, description } = req.body;

        if (!title || !content || !publisherName || !categoryId || !description || !req.file) {
            console.error("❌ Missing required fields");
            return res.status(400).json({ message: "All fields including image are required" });
        }

        const image = `/uploads/${req.file.filename}`; // ✅ Store relative path

        const news = await News.create({
            title, content, publisherName, categoryId, description, image, publishedAt: new Date()
        });

        res.status(201).json({ message: "✅ News article added successfully", news });
    } catch (error) {
        console.error("❌ Error adding news:", error);
        res.status(500).json({ message: error.message });
    }
});

// ✅ Uncomment and fix this if you need to filter by category
// router.get("/category/:categoryId", async (req, res) => {
//   try {
//     const { categoryId } = req.params;
//     if (!categoryId) {
//       return res.status(400).json({ message: "Category ID is required" });
//     }
//     const news = await News.findAll({
//       where: { categoryId },
//       attributes: ["id", "title", "publisherName", "image", "content", "publishedAt"]
//     });
//     res.status(200).json({ success: true, news });
//   } catch (error) {
//     console.error("❌ Error fetching news by category:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get('/india',async(req,res)=>{
 const indiaNews= await News.findAll({where:{categoryId:4}})
 res.json(indiaNews)
})
router.get('/world',async(req,res)=>{
 const worldNews= await News.findAll({where:{categoryId:3}})
 res.json(worldNews)
})
router.get('/sports',async(req,res)=>{
 const SportsNews= await News.findAll({where:{categoryId:1}})
 res.json(SportsNews)
})
router.get('/business',async(req,res)=>{
 const businessNews= await News.findAll({where:{categoryId:2}})
 res.json(businessNews)
})

module.exports = router;
