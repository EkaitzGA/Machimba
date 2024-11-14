import { Router } from "express";
import adminController from "../controllers/adminController.js"

const router = Router()

router.get("/",adminController.adminPage)

router.get('/products', adminController.showProducts)
router.get('/products/update', adminController.updatePurseForm)
router.get('/products/update', adminController.updatePurseSubmit)
router.post('/products/delete', adminController.deletePurse) //no hace falta vista un boton tipo form
router.get('/products/create', adminController.createPurseForm)
router.post('/products/create', adminController.createPurseSubmit)

router.get('/users', adminController.showUsers)

router.get('/history', adminController.showHistory)


export default router