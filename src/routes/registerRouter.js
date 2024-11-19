import { Router } from "express";
import registerViewController from "../controllers/auth/registerViewController.js"

const router = Router()

router.get("/",registerViewController.registerForm)

router.post("/",registerViewController.registerNewClient)


export default router