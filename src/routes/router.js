import { Router } from "express";
import pursesRouter from "./pursesRouter.js"
import shoppingCartRouter from "./shoppingCartRouter.js"
import loginRouter from "./loginRouter.js"

const router = Router();

router.get('/home', (req, res) => {
    res.send("Bienvenide a Machimba");
});

router.use("/purses", pursesRouter)

router.use("/shopping-cart",shoppingCartRouter)
router.use("/login", loginRouter)
export default router;