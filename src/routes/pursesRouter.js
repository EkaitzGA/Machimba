import { Router } from "express";
import pursesViewController from "../controllers/shop/pursesViewController.js"

const router = Router()

router.get("/",pursesViewController.getAll)
router.get("/:id",pursesViewController.getById)

export default router

