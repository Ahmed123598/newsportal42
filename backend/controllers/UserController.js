const User=require('../models/User')
const {Op}=require('sequelize')
const bcrypt = require('bcrypt')




//get all users
const getAllUsers= async (req,res)=>{
    const users=await User.findAll(
      
    )
    res.json(users)
  }
  //get  emails of all users
  
  // create user
  const createUsers= async (req,res)=>{
    try {
      const {firstName,lastName,email,password}=req.body
   const hashPassword=await bcrypt.hash(password, 10)
        
    console.log(hashPassword);
    
        // Store hash in your password DB.
        const newUser= await User.create({
          firstName,
          lastName,
          email,
          password:hashPassword})
      
      
        const users=await User.findAll()
      res.status(201).json(users)
    } catch (error) {
      res.json(error.message)
      
    }
    
  }

  const uploadProfilePic=async (req,res)=>{ 
  
  
  }

  //get single user
  const getSingleUser=async(req,res)=>{
    const {id}=req.params
    const user =await User.findByPk(id)
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
  
    res.json(user)
  }

  const getAllUsersEmail=async (req,res)=>{
    const usersEmail=await User.findAll({
      attributes: ['email','firstName','id']
    })
    res.json(usersEmail)
  }
  

  //update user
 const updateUser=async(req,res)=>{
    const {id}=req.params
    const user=await User.findByPk(id)
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
   await User.update(req.body,{where:{id}})
  const updatedUser=await User.findByPk(id)
  
    res.json(updatedUser)
  }
  
  
  //delete user
  const deleteUser=async(req,res)=>{
  const {id}=req.params
  const user =await User.findByPk(id)
  if(!user){
    return res.status(404).json({message:'User not found'})
  }
  await User.destroy({where:{id}})
  res.json({message:'User deleted successfully'})
  }
  

  module.exports={getAllUsers,createUsers,getSingleUser,getAllUsersEmail,updateUser,deleteUser,uploadProfilePic}