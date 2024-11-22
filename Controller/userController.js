

const userController = {
    register: (req, res) => {
      // Logic đăng ký người dùng
      res.status(200).json({ message: 'User registered successfully' });
    },
    login: (req, res) => {
      // Logic đăng nhập
      res.status(200).json({ message: 'Login successful' });
    },
    list: async (req, res) => {
      const { page = 1, limit = 10 } = req.query;  // Lấy page và limit từ query string
    const skip = (page - 1) * limit;  // Tính toán số bản ghi cần bỏ qua
      try { 
        const users = await User.find()
        .skip
        .limit(Number(limit));
        const total = await User.countDocuments();
        res.json({
          users,
          total,
          page: Number(page),
          totalPages: Math.ceil(total / limit), 
        });

      } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
      }   
    },
  };

  console.log(userController.list);

  
  export default userController;