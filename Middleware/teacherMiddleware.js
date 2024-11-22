const teacherMiddleware = {
    validateTeacher: (req, res, next) => {
      console.log('Middleware validateTeacher called');
      const { name, subject } = req.body;
      if (!name || !subject) {
        return res.status(400).json({ error: 'Name and subject are required' });
      }
      next();
    },
  };
  
  export default teacherMiddleware;