import { Request, Response, Router } from "express";
import UserController from "../controllers/UserController";



const router = Router()

router.post('/user/createUser', UserController.createUSer)




export default router