const express = require("express");
const router = express.Router();
const { 
    getAllUsers, 
    createUsers, 
    getSingleUser, 
    getAllUsersEmail, 
    updateUser, 
    deleteUser, 
    uploadProfilePic // ✅ Keep only one import!
} = require("../controllers/UserController");
const upload = require("../config/multerconfig");
const { login } = require("../controllers/authController");
const auth = require("../middlewares/auth");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

// ✅ Configure Multer for profile picture uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // ✅ Ensure 'uploads' folder exists
    },
    filename: (req, file, cb) => {
        const fileExt = file.mimetype.split("/")[1];
        const uniqueFilename = `${uuidv4()}.${fileExt}`;
        cb(null, uniqueFilename);
    }
});
const uploadMiddleware = multer({ storage }); // ✅ Rename to prevent conflicts

// ✅ Secure profile picture upload with JWT authentication
router.post("/upload", auth, uploadMiddleware.single("profile-pic"), uploadProfilePic);

module.exports = router;
