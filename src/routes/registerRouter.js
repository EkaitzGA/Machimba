import { Router } from "express";
import registerController from "../controllers/registerController.js"

const router = Router()

router.get("/",registerController.registerForm)

router.post("/",registerController.registerSubmit)


export default router