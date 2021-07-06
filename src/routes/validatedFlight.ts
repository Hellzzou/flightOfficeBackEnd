import { Router } from "express"
import {
	createAValidatedFlight,
	findOneValidatedFlight,
	deleteOneValidatedFlight,
	findValidateFlightsBetweenThisDates,
} from "../controllers/validatedFlight"
import auth from "../authentification/auth"

const router = Router()

router.post("/save", auth, createAValidatedFlight)
router.post("/find", auth, findOneValidatedFlight)
router.delete("/deleteOne", auth, deleteOneValidatedFlight)
router.post("/byDate", findValidateFlightsBetweenThisDates)

export default router
