const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET || "your_very_secure_secret_key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

// ✅ Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["id", "firstName", "email", "profilePic"] });
    res.json(users);
  } catch (error) {
    console.error("🔴 Error fetching users:", error);
    res.status(500).json({ success: false, error: "Error fetching users" });
  }
};

// ✅ Create user with profile pic (if provided)
const createUsers = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const profilePic = req.file ? `/uploads/${req.file.filename}` : null;

    // ✅ Check if email exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ success: false, error: "Email already in use" });

    // ✅ Create user
    const newUser = await User.create({ firstName, lastName, email, password, profilePic });

    // ✅ Generate JWT token
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.status(201).json({ success: true, message: "User created successfully", token });
  } catch (error) {
    console.error("🔴 Error creating user:", error);
    res.status(500).json({ success: false, error: "Error creating user" });
  }
};

// ✅ Upload Profile Picture (JWT Protected)
const uploadProfilePic = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // ✅ Verify user from JWT
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.update({ profilePic: `/uploads/${req.file.filename}` });

    res.status(200).json({ success: true, message: "Profile picture uploaded successfully", profilePic: user.profilePic });
  } catch (error) {
    console.error("🔴 Error uploading profile picture:", error);
    res.status(500).json({ error: "Error uploading profile picture" });
  }
};

// ✅ Get single user
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: ["id", "firstName", "email", "profilePic"] });
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("🔴 Error fetching user:", error);
    res.status(500).json({ success: false, error: "Error fetching user" });
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  getSingleUser,
  uploadProfilePic,
};
