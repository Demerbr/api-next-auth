import {   Router } from "express";
import UserController from "../controllers/UserController";



const userRouter = Router()

userRouter.post('/', UserController.createUser)





export {userRouter}