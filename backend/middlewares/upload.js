const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ✅ Ensure Uploads Directory Exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Allowed File Types
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];

    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("❌ Invalid file type! Only JPG, JPEG, PNG, and GIF allowed."), false);
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
