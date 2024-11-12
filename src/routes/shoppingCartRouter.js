import { Router } from "express";
import shoppingCartController from "../controllers/shoppingCartController.js"

const router = Router()

router.get("/",shoppingCartController.showCart)

export default router