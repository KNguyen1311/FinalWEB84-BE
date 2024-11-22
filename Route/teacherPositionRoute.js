import express from "express";
import teacherPositionController from "../Controller/teacherPositionController.js";
import teacherPositionMiddleware from "../Middleware/teacherPositionMiddleware.js";
import authenticateToken from "../Middleware/jwt.js";

const teacherPositionRouter = express.Router();

teacherPositionRouter.post('/create', authenticateToken,teacherPositionMiddleware.validatePosition,teacherPositionController.createTeacherPosition);
teacherPositionRouter.get('/', teacherPositionController.getAllTeacherPositions);

  
  export default teacherPositionRouter;