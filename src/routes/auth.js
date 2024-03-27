import { Router } from "express";
import { login } from "../controllers/auth.js";

const router = Router(); // creation de router

router.post("/login", login); // mapping lil post request mta3 /login lil login controller

export default router;
