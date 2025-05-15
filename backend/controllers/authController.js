const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET || "your_very_secure_secret_key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h"; // Token expiration from .env

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Find user using email only (avoid filtering by password)
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    // ✅ Direct password comparison (plaintext handling)
    if (user.password !== password) return res.status(401).json({ success: false, error: "Invalid password" });

    // ✅ Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = { login };
