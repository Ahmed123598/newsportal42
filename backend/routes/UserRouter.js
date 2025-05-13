const express = require('express')
const router = express.Router()
const { getAllUsers, createUsers, getSingleUser, getAllUsersEmail, updateUser, deleteUser, uploadProfilePic } = require('../controllers/UserController')
const { login } = require('../controllers/authController')
const auth = require('../middlewares/auth')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '.' + file.mimetype.split('/')[1]
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

// router.use(auth)
// router.use(auth)//get all users
router.get('/', [auth,], getAllUsers)

router.post('/upload',upload.single('profile-pic') ,uploadProfilePic)
//get  emails of all users

// create user
router.post('/', createUsers)
//get single user
router.get('/:id', getSingleUser)

router.get('/emails', getAllUsersEmail)

//update user
router.put('/:id', updateUser)


//delete user
router.delete('/:id', deleteUser)

router.post('/auth/login', login)
module.exports = router