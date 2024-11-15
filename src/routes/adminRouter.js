import { Router } from "express";
import adminViewController from "../controllers/admin/adminViewController.js"

const router = Router()

router.get("/",adminViewController.adminPage)

/* router.get('/products', adminViewController.showProducts) */
router.get('/products/update', adminViewController.updatePurseForm)
router.get('/products/update', adminViewController.updatePurseSubmit)
router.post('/products/delete', adminViewController.deletePurse) //no hace falta vista un boton tipo form
/* router.get('/products/create', adminViewController.createPurseForm) */ //form creado
router.post('/products/create', adminViewController.createPurseSubmit)

router.get('/users', adminViewController.showUsers)

router.get('/history', adminViewController.showHistory)


export default router