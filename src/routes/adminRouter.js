import { Router } from "express";
import adminViewController from "../controllers/admin/adminViewController.js"

const router = Router()

router.get("/",adminViewController.adminPage)

router.get('/products', adminViewController.showProducts)
router.get('/products/search', adminViewController.searchProducts)
router.get('/products/search-by', adminViewController.searchProductsBy)
router.get('/products/:id/update', adminViewController.updatePurseForm)
router.post('/products/:id/updatesubmit', adminViewController.updatePurseSubmit)
router.post('/products/:id/delete', adminViewController.deletePurse) 
router.get('/products/create', adminViewController.createPurseForm)
router.post('/products/create', adminViewController.createPurseSubmit)

router.get('/clients', adminViewController.showClients)
router.get('/workers', adminViewController.showWorkers)
router.get('/users/workers/:id/update', adminViewController.updateWorkerForm)
router.post('/users/workers/:id/updatesubmit', adminViewController.updateWorkerSubmit)
router.post('/users/workers/:id/delete', adminViewController.deleteWorker) 
router.get('/users/workers/create', adminViewController.createWorkerForm)
router.post('/users/workers/create', adminViewController.createWorkerSubmit)

router.get('/purchase-history', adminViewController.showHistory)


export default router