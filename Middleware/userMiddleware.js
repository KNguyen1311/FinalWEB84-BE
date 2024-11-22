const userMiddleware = {
    checkRegister: (req, res, next) => {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }
      next();
    },
    checkLogin: (req, res, next) => {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: 'Invalid username or password' });
        
      }
      next();
    },
  };
  
  export default userMiddleware;