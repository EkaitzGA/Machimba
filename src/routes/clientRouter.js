import { Router } from "express";
import clientViewController from "../controllers/client/clientViewController.js"

const router = Router()

router.get("/:id",clientViewController.showProfile)

router.get("/:id/personal-data",clientViewController.getPersonalData)

router.get("/:id/purchase-history",clientViewController.getClientHistory)



export default router