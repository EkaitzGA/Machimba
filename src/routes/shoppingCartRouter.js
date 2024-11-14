import { Router } from "express";
import shoppingCartController from "../controllers/shop/shoppingCartController.js"

const router = Router()

router.get("/",shoppingCartController.showCart)

export default router