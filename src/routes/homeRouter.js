import { Router } from "express";
import homeController from "../controllers/homeController.js"

const router = Router()

router.get('/', homeController.showHome);

export default router