import { Router } from "express"
import {
	createNewFlight,
	findNewFlightWithID,
	getAllNewFlights,
	deleteNewFlightWithID,
} from "../controllers/newFlight"
import auth from "../authentification/auth"

const router = Router()

router.post("/save", auth, createNewFlight)
router.post("/find", auth, findNewFlightWithID)
router.get("/getAllNewFlights", auth, getAllNewFlights)
router.delete("/deleteWithID", auth, deleteNewFlightWithID)

export default router
