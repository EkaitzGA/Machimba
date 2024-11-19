import { Router } from "express";
import pursesViewController from "../controllers/shop/pursesViewController.js"
import pursesApiController from "../controllers/shop/pursesApiController.js"

const router = Router()

router.get('/api/purses', pursesApiController.getAllPurses);
router.get('/api/purses/:id', pursesApiController.getPurseById);

router.get("/",pursesViewController.getAll)
router.get('/search', pursesViewController.searchPurses)
router.get('/filter', pursesViewController.filterPurses)
router.get("/:id",pursesViewController.getById)



export default router

