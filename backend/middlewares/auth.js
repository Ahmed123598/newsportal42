const jwt = require('jsonwebtoken')


const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
          }
        
          const token = authHeader.split(' ')[1]; // Expecting "Bearer TOKEN"
        
        // const { token } = req.body
        if (!token) return res.status(401).json({ message: 'Unauthorized' })
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) return res.status(401).json({ message: 'wrong token' })
           
            next()
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: 'Unauthorized' })
        
    }
   

}

module.exports = auth