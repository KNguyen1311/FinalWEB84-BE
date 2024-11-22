import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import cors from 'cors';
import userRouter from "./Route/userRoute.js"
import teacherRouter from "./Route/teacherRoute.js"
import teacherPositionRouter from "./Route/teacherPositionRoute.js";
import AuRouter from "./Route/refresh.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); 


try{
    await mongoose.connect('mongodb+srv://nguyennk2201:nguyennk2201@cluster0.nptev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log('Connected database!'); 
    })
    } catch (error){
        console.log(error)
    }
    app.use('/api/users', userRouter);
    app.use('/api/teachers', teacherRouter);
    app.use('/api/teacher-positions', teacherPositionRouter);
    app.use('/api', AuRouter); 

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });