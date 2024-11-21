import { Router } from "express";
import pursesRouter from "./pursesRouter.js"
import shoppingCartRouter from "./shoppingCartRouter.js"
import loginRouter from "./loginRouter.js"
import adminRouter from "./adminRouter.js"
import registerRouter from "./registerRouter.js"
import clientRouter from "./clientRouter.js"
import homeRouter from "./homeRouter.js"
import { isWorker } from '../middlewares/view/authMiddleware.js';
import { isAuthenticated } from '../middlewares/view/authMiddleware.js';

const router = Router();

router.get('/', (req, res) => {
    res.send("Bienvenide a Machimba");
});

router.use("/home", homeRouter)

router.use("/purses", pursesRouter)

router.use("/shopping-cart",shoppingCartRouter)

router.use("/login", loginRouter)

router.use("/admin", isWorker, adminRouter)

router.use("/register", registerRouter)

router.use("/client-profile", isAuthenticated, clientRouter)

export default router;