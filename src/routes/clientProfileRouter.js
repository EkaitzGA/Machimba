import { Router } from "express";
import clientProfileController from "../controllers/clientProfileController.js"

const router = Router()

router.get("/",clientProfileController.showProfile)

router.get("/purchase-history",clientProfileController.showClientHistoy)


export default router