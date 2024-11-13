import { Router } from "express";
import registerController from "../controllers/registerController.js"

const router = Router()

router.get("/",registerController.register)


export default router