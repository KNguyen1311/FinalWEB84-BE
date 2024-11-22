import express from "express";
import userMiddleware from "../Middleware/userMiddleware.js";
import userController from "../Controller/userController.js";
import authenticateToken from "../Middleware/jwt.js";

const userRouter = express.Router();

userRouter.get('/list', authenticateToken, userController.list);
userRouter.post('/register',userMiddleware.checkRegister, userController.register);
userRouter.post('/login',userMiddleware.checkLogin, userController.login);




export default userRouter;