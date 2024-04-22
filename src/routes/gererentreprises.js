import { Router } from "express";
import { gererentreprises } from "../controllers/gererentreprises";

const router = GererentreprisesRouter(); 

router.post("/gererentreprises", gererentreprises); 

export default gererentreprisesrouter;