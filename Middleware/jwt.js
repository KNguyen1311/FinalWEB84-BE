import jwt from 'jsonwebtoken';


const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Lấy token từ header

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

  export default authenticateToken;