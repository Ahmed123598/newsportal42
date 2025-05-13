const express=require('express')
const router=express.Router()
const Post=require('../models/Post.js')

router.get('/',async(req,res)=>{
    const posts=await Post.findAll({include:'User',
        attributes: ['title','description'],
    }
        
    )
    res.send(posts)
})
router.post('/',async(req,res)=>{
    try {
        
        const posts=await Post.create(req.body)
        res.json(posts)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

module.exports=router