const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ✅ Ensure Uploads Directory Exists
const uploadDir = path.join(__dirname, "../uploads");

// ✅ Ensure Uploads Directory Exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const allowedFormats = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];

const fileFilter = (req, file, cb) => {
    if (allowedFormats.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("❌ Only JPG, PNG, GIF, WEBP, and SVG allowed!"), false);
    }
};



// ✅ Configure Storage for Uploaded Images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9.-]/g, "")}`);
    }
});

// ✅ Multer Setup with Validation & Size Limit (2MB)
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 },
});

module.exports = upload;
