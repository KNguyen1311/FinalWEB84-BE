import mongoose from "mongoose";


const degreeSchema = new mongoose.Schema({
        type: {
          type: String,
          required: true
        },
        school: {
          type: String,
          required: true
        },
        major: {
          type: String,
          required: true
        },
        year: {
          type: Number,
          required: true
        },
        isGraduated: {
          type: Boolean,
          default: false
        }
      });
      
      // Định nghĩa schema cho Teacher (Giáo viên)
      const teacherSchema = new mongoose.Schema({
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users", // Tham chiếu đến User model (nếu có)
          required: true
        },
        isActive: {
          type: Boolean,
          default: true
        },
        isDeleted: {
          type: Boolean,
          default: false
        },
        code: {
          type: String,
          required: true,
          unique: true // Mã giáo viên duy nhất
        },
        startDate: {
          type: Date,
          required: true
        },
        endDate: {
          type: Date
        },
        
          teacherPositionsId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "teacherPosition" // Tham chiếu đến TeacherPosition model (nếu có)
          },
     
        degrees: [degreeSchema], // Mảng các bằng cấp của giáo viên
      },{
        collection:'teacher'
      });
      
      // Tạo model Teacher từ schema
      const Teacher = mongoose.model("teacher", teacherSchema);
      
      export default Teacher;