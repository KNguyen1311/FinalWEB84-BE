import express from "express"
import { refreshTokenController } from "../Controller/refreshController.js"

const AuRouter = express.Router();

AuRouter.post('/refresh-token', refreshTokenController);

export default AuRouter;
