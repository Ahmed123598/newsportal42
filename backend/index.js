const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // ✅ Import CORS
const sequelize = require('./config/db');
const News = require('./models/News');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for JSON requests
app.use(express.urlencoded({ extended: true })); // for form data (like from HTML forms)


// ✅ Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Middleware to set CORS headers manually


// ✅ Connect to MySQL
const authenticate=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
authenticate()

async function syncDb(){

  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
}
// syncDb()

// ✅ API to Get All News Articles
app.get('/news', async(req, res) => {
  try {
    
      const news= await News.findAll({where})
      res.json(news)
  } catch (error) {
    console.log(error.message);
    
  }
  
});

app.post('/login',(req,res)=>{
    const {data}= req.body
    // console.log(req.body);
    
    res.json(`this is from backend: ${data.username} and ${data.password}` )
})

// ✅ API to Get Single News Article
// app.get('/news/:id', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // ✅ Allow frontend access
//     const { id } = req.params;
//     db.query('SELECT id, title, content AS description, image FROM news WHERE id = ?', [id], (err, result) => {
//         if (err) throw err;
//         if (result.length === 0) {
//             return res.status(404).json({ error: 'News not found' });
//         }
//         res.json(result[0]);
//     });
// });


// ✅ Start the Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
