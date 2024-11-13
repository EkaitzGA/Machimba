import { Router } from "express";
import registerController from "../controllers/registerController.js"

const router = Router()

router.get("/",registerController.login)


export default router