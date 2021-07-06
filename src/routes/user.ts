import { Router } from "express"
import {
	signup,
	login,
	getAllUsers,
	getAUser,
	deleteOneUser,
	getUsersByFunction,
} from "../controllers/user"
import auth from "../authentification/auth"

const router = Router()

router.post("/signup", auth, signup)
router.post("/login", login)
router.get("/getAllUsers", auth, getAllUsers)
router.get("/getOne", auth, getAUser)
router.delete("/deleteAUser", auth, deleteOneUser)
router.post("/getAdmins", auth, getUsersByFunction)

export default router
