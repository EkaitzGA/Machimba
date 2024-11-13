import { Router } from "express";
import clientProfileController from "../controllers/clientProfileController.js"

const router = Router()

router.get("/",clientProfileController.login)


export default router