// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // ✅ Ensure the "uploads/" folder exists safely
// const uploadDir = path.join(__dirname, "../uploads");
// try {
//     if (!fs.existsSync(uploadDir)) {
//         fs.mkdirSync(uploadDir, { recursive: true }); // ✅ Prevents race conditions
//     }
// } catch (err) {
//     console.error("❌ Error creating uploads folder:", err);
// }

// // ✅ Allowed file types (MIME Type Check Added)
// const fileFilter = (req, file, cb) => {
//     const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
//     const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
//     const ext = path.extname(file.originalname).toLowerCase();

//     if (allowedMimeTypes.includes(file.mimetype) && allowedExtensions.includes(ext)) {
//         cb(null, true);
//     } else {
//         cb(new Error("❌ Invalid file type! Only JPG, JPEG, PNG, and GIF allowed."), false);
//     }
// };

// // ✅ Configure storage for uploaded images
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//         const safeName = file.originalname.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9.-]/g, ""); // ✅ Prevents special character issues
//         cb(null, `${Date.now()}-${safeName}`);
//     }
// });

// // ✅ Multer setup with validation & size limit (2MB)
// const upload = multer({
//     storage,
//     fileFilter,
//     limits: { fileSize: 2 * 1024 * 1024 }, // ✅ 2MB limit
// });

// // ✅ Export Multer middleware
// module.exports = upload;
