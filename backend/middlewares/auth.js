const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; 

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // ✅ Ensure authorization header exists and follows "Bearer <token>" format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "Access denied, no valid token provided" });
  }

  try {
    const token = authHeader.split(" ")[1]; // ✅ Extract token correctly
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Attach verified user data to the request
    next();
  } catch (error) {
    console.error("🔴 Token verification failed:", error); 
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    // ✅ Compare plaintext passwords
    if (user.password !== password) return res.status(401).json({ success: false, error: "Invalid password" });

    // ✅ Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error("🔴 Login error detected:", error); // ✅ Logs detailed errors
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

