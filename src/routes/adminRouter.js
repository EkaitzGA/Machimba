import { Router } from "express";
import adminViewController from "../controllers/admin/adminViewController.js"

const router = Router()

router.get("/",adminViewController.adminPage)

router.get('/products', adminViewController.showProducts)
router.get('/products/:id/update', adminViewController.updatePurseForm)
router.post('/products/:id/updatesubmit', adminViewController.updatePurseSubmit)
router.post('/products/:id/delete', adminViewController.deletePurse) //no hace falta vista un boton tipo form
router.get('/products/create', adminViewController.createPurseForm)
router.post('/products/create', adminViewController.createPurseSubmit)

router.get('/users', adminViewController.showUsers)

router.get('/history', adminViewController.showHistory)


export default router