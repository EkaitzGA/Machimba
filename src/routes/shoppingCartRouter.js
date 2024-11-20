import { Router } from "express";
import shoppingCartViewController from "../controllers/shoppingCart/shoppingCartViewController.js"
import { isClient } from "../middlewares/view/authMiddleware.js";

const router = Router()

router.get("/", shoppingCartViewController.showCart)

router.post('/', isClient, shoppingCartViewController.addProduct)

router.post('/update', isClient, shoppingCartViewController.setProductQuantity)

router.post('/delete', isClient, shoppingCartViewController.removeProduct)

router.post('/buy', isClient, shoppingCartViewController.finishPurchase)

// router.get("/:id/update",shoppingCartViewController.updateCart)
// router.post("/:id/delete", shoppingCartViewController.deleteItem)
// router.post("/delete", shoppingCartViewController.deleteAll)

export default router