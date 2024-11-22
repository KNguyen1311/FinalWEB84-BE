import express from "express";
import teacherController from "../Controller/teacherController.js";
import teacherMiddleware  from "../Middleware/teacherMiddleware.js";
import authenticateToken from "../Middleware/jwt.js";


const teacherRouter = express.Router();

teacherRouter.post('/create',teacherController.createTeacher)
teacherRouter.get('/list',authenticateToken,teacherController.listTeachers)




export default teacherRouter;