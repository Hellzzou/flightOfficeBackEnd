import { Router } from "express"
import {
	deleteAllNorms,
	findNormWithName,
	getAllNorms,
	createNorm,
} from "../controllers/norm"
import auth from "../authentification/auth"

const router = Router()

router.delete("/deleteAllNorms", auth, deleteAllNorms)
router.post("/find", auth, findNormWithName)
router.get("/getAllNorms", auth, getAllNorms)
router.post("/save", auth, createNorm)

export default router
