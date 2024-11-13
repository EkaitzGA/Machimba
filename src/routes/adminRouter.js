import { Router } from "express";
import adminController from "../controllers/adminController.js"

const router = Router()

router.get("/",adminController.adminPage)

router.get('/products', adminController.showProducts)

router.get('/users', adminController.showUsers)

router.get('/history', adminController.showHistory)


export default router