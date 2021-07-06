import { Router } from "express"
import {
	getAllPilots,
	deleteAllPilots,
	getAllPilotsFrom23F,
	createPilot,
	getPilotByName,
} from "../controllers/pilot"
import auth from "../authentification/auth"

const router = Router()

router.get("/getAllPilots", auth, getAllPilots)
router.delete("/deleteAllPilots", auth, deleteAllPilots)
router.post("/23F", auth, getAllPilotsFrom23F)
router.post("/save", auth, createPilot)
router.post("/getOne", auth, getPilotByName)

export default router
