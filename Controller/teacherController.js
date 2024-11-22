import Teacher from "../Model/teacherModel.js";

const generateUniqueCode = async () => {
  let code;
  let isDuplicate = true;

  while (isDuplicate) {
    code = Math.floor(100000 + Math.random() * 900000).toString(); 
    const existingTeacher = await Teacher.findOne({ code });
    if (!existingTeacher) {
      isDuplicate = false;
    }
  }
  return code;
};

const teacherController = {
  createTeacher: async (req, res) => {
    try {
      const { name, email, phone, address, position, education, startDate } = req.body;

    
      if (!name || !email || !phone || !address || !position || !education) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
          return res.status(400).json({ error: 'Email already exists' });
        }

      const code = await generateUniqueCode();

      const newTeacher = new Teacher({
       
        name,
        email,
        phone,
        address,
        position,
        education,
        startDate,
        
      });

      await newTeacher.save();

      res.status(201).json({
        message: 'Teacher created successfully',
        teacher: newTeacher,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating teacher' });
    }
  },

  listTeachers: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const teachers = await Teacher.find()
        .skip(skip)
        .limit(limit);

      res.status(200).json({ teachers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching teachers' });
    }
  },
};
  
  export default teacherController;