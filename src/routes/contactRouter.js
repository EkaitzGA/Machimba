import { Router } from "express";
import contactController from "../controllers/contactController.js"

const router = Router()

router.get('/', contactController.showContact);

export default router