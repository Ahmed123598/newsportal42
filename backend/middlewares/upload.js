const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ✅ Ensure the uploads folder exists
const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// ✅ Configure Multer for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const safeName = file.originalname.replace(/\s+/g, "-");
        cb(null, safeName + "-" + uniqueSuffix);
    }
});

// ✅ Export Multer instance correctly
const upload = multer({ storage });

module.exports = upload;
