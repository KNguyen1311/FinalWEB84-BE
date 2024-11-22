import jwt from "jsonwebtoken"
import User from "../Model/userModel.js"

const refreshTokenController = async (req, res) => {
    const refreshToken = req.body.refreshToken || req.headers['authorization']?.split(' ')[1];
  
    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token is required' });
    }
  
    try {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(403).json({ error: 'User not found' });
      }
  
      const newAccessToken = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } 
      );
  
      res.json({ accessToken: newAccessToken });
    } catch (error) {
      console.error('Error verifying refresh token:', error);
      return res.status(403).json({ error: 'Invalid refresh token' });
    }
  };
  
  export { refreshTokenController };