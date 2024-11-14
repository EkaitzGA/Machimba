import { Router } from "express";
import clientProfileController from "../controllers/clientProfile/clientProfileController.js"

const router = Router()

router.get("/",clientProfileController.showProfile)

router.get("/purchase-history",clientProfileController.showClientHistoy)


export default router