import { Router } from "express";
import loginController from "../controllers/shop/loginController.js"

const router = Router()

router.get("/",loginController.login)

router.post("/",loginController.loginAccess)


export default router