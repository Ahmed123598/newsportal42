const express = require('express');
const router = express.Router();
const { getAllUsers, createUsers, getSingleUser, getAllUsersEmail, updateUser, deleteUser, uploadProfilePic } = require('../controllers/UserController');
const { login } = require('../controllers/authController');
const auth = require('../middlewares/auth');
const multer = require('multer');

// ✅ Configure Multer for profile picture upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '.' + file.mimetype.split('/')[1];
    cb(null, file.originalname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage });

// ✅ Protected route: Get all users (Requires JWT)
router.get('/', auth, getAllUsers);

// ✅ Upload profile picture
router.post('/upload', upload.single('profile-pic'), uploadProfilePic);

// ✅ Create user
router.post('/', createUsers);

// ✅ Get single user
router.get('/:id', auth, getSingleUser);

// ✅ Get all user emails
router.get('/emails', auth, getAllUsersEmail);

// ✅ Update user
router.put('/:id', auth, updateUser);

// ✅ Delete user
router.delete('/:id', auth, deleteUser);

// ✅ Login route
router.post('/auth/login', login);

module.exports = router;
