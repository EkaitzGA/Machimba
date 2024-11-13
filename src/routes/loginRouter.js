import { Router } from "express";
import loginController from "../controllers/loginController.js"

const router = Router()

router.get("/",loginController.login)

router.post("/",loginController.loginAccess)


export default router