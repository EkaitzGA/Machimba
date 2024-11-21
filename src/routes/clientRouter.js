import { Router } from "express";
import clientViewController from "../controllers/client/clientViewController.js"
import { isWorkerOrActualClient } from "../middlewares/view/authMiddleware.js"

const router = Router()

router.get("/:id", isWorkerOrActualClient, clientViewController.showProfile)

router.get("/:id/personal-data/update", isWorkerOrActualClient, clientViewController.updateForm);

router.get("/:id/purchase-history", isWorkerOrActualClient, clientViewController.showCompleteHistory);

router.post("/:id/personal-data",isWorkerOrActualClient, clientViewController.update);

router.post("/:id/delete", isWorkerOrActualClient, clientViewController.remove);

export default router