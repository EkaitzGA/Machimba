import { Router } from "express";
import shoppingCartViewController from "../controllers/shop/shoppingCartViewController.js"

const router = Router()

router.get("/",shoppingCartViewController.showCart)

// router.get("/:id/update",shoppingCartViewController.updateCart)
// router.post("/:id/delete", shoppingCartViewController.deleteItem)
// router.post("/delete", shoppingCartViewController.deleteAll)

export default router