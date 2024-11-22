import TeacherPosition from "../Model/teacherPositionModel.js";


const teacherPositionController = {
  getAllTeacherPositions: async (req, res) => {
    try {
      const positions = await TeacherPosition.find({ isDeleted: false });
      res.status(200).json({ positions });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching teacher positions' });
    }
  },

  createTeacherPosition: async (req, res) => {
    try {
      const { name, code, description } = req.body;
      const newPosition = new TeacherPosition({
        name,
        code,
        description,
      });
      await newPosition.save();
      res.status(201).json({ message: 'Teacher position created successfully', position: newPosition });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating teacher position' });
    }
  },
};

export default teacherPositionController;