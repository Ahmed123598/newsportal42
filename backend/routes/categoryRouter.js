const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");



// router.get("/category/:categoryId", async (req, res) => {
//     try {
//         const { categoryId } = req.params;
//         const news = await News.findAll({ where: { categoryId: Number(categoryId) } });

//         if (!news.length) {
//             return res.status(404).json({ message: `❌ No news found for category ID: ${categoryId}` });
//         }

//         res.json(news);
//     } catch (error) {
//         console.error("❌ Error fetching news by categoryId:", error);
//         res.status(500).json({ message: "Internal server error", details: error.message });
//     }
// });










// ✅ Create a New Category
router.post("/", async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name) return res.status(400).json({ error: "Category name is required" });

        const newCategory = await Category.create({ name, description });
        res.status(201).json({ success: true, category: newCategory });
    } catch (error) {
        console.error("❌ Error creating category:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Fetch All Categories
router.get("/", async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error("❌ Error fetching categories:", error);
        res.status(500).json({ error: "Internal Server Error" });
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

module.exports = router;
