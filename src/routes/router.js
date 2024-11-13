import { Router } from "express";
import pursesRouter from "./pursesRouter.js"
import shoppingCartRouter from "./shoppingCartRouter.js"
import loginRouter from "./loginRouter.js"
import registerRouter from "./registerRouter.js"
import clientProfileRouter from "./clientProfileRouter.js"

const router = Router();

router.get('/home', (req, res) => {
    res.send("Bienvenide a Machimba");
});

router.use("/purses", pursesRouter)

router.use("/shopping-cart",shoppingCartRouter)

router.use("/login", loginRouter)

router.use("/register", registerRouter)

router.use("/client-profile", clientProfileRouter)

export default router;