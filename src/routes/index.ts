import { Router, request, response } from "express";
import { userRouter } from "./UserRouter";
import { authRouter } from "./AuthRouter";



const router = Router()


router.use('/user/createUser', userRouter)
router.use('/user/session', authRouter)

export { router} 