import { Router } from "express";
import pursesRouter from "./pursesRouter.js"
import shoppingCartRouter from "./shoppingCartRouter.js"
import loginRouter from "./loginRouter.js"
import adminRouter from "./adminRouter.js"

const router = Router();

router.get('/', (req, res) => {
    res.send("Bienvenide a Machimba");
});

router.use("/purses", pursesRouter)

router.use("/shopping-cart",shoppingCartRouter)

router.use("/login", loginRouter)

router.use("/admin", adminRouter)
export default router;