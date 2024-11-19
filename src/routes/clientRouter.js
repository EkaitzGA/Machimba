import { Router } from "express";
import clientViewController from "../controllers/client/clientViewController.js"

const router = Router()

router.get("/:id",clientViewController.showProfile)

router.get("/:id/personal-data/update",clientViewController.updateForm);

router.post("/:id/personal-data",clientViewController.update);

router.post("/:id/delete",clientViewController.remove);

export default router