import { Router } from "express";
import shoppingCartViewController from "../controllers/shop/shoppingCartViewController.js"

const router = Router()

router.get("/",shoppingCartViewController.showCart)

export default router