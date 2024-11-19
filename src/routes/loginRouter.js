import { Router } from "express";
import loginViewController from "../controllers/auth/loginViewController.js"

const router = Router()

router.get("/",loginViewController.loginForm)

router.post("/",loginViewController.login)

router.get("/logout",loginViewController.logout);


export default router