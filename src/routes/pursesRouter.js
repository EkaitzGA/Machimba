import { Router } from "express";
import pursesController from "../controllers/pursesController.js"

const router = Router()

router.get("/",pursesController.getAll)
router.get("/:id",pursesController.getById)

export default router

