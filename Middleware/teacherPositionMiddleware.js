const teacherPositionMiddleware = {
    validatePosition: (req, res, next) => {
      const { name, code } = req.body;
      if (!name || !code) {
        return res.status(400).json({ error: 'Name and code are required' });
      }
      next();
    },
  };
  
  export default teacherPositionMiddleware;