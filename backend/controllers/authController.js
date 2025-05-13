const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
const {email,password}=req.body
const user = await User.findOne({ where: { email } });//chceking if user with this email exists
if(!user) return res.status(404).json({message:'User not found'}) 

const compare=bcrypt.compare(password, user.password) //comparing incoming password with hased password of database
if(!compare) return res.status(401).json({message:'Invalid password'})

const payload={id:user.id,firstName:user.firstName}

const token =jwt.sign(payload,process.env.JWT_SECRET) //jwt.sign(payload,secret,)
res.status(200).json({message:'Login successful',token})

//in frontned react: we should save this token in localstoage or session storage for future use of API, and use in authorization header
}

module.exports = {login}