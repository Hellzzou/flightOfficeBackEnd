import { Router } from "express"
import { findAllAreas, deleteAllAreas, createAnArea } from "../controllers/area"
import auth from "../authentification/auth"

const router = Router()

router.get("/getAllAreas", auth, findAllAreas)
router.delete("/deleteAllAreas", auth, deleteAllAreas)
router.post("/createAnArea", auth, createAnArea)

export default router
