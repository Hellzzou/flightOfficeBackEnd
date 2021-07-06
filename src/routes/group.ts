import { Router } from "express"
import {
	findClientFromUnderGroupAndManager,
	findManagerFromUnderGroupAndClient,
	findGroupsWithUnderGroup,
	findGroupsWithGroup,
	createGroup,
	getAllGroups,
	deleteAllGroups,
} from "../controllers/group"
import auth from "../authentification/auth"

const router = Router()

router.post("/findManager", auth, findClientFromUnderGroupAndManager)
router.post("/findClient", auth, findManagerFromUnderGroupAndClient)
router.post("/findUnderGroup", auth, findGroupsWithUnderGroup)
router.post("/findGroup", auth, findGroupsWithGroup)
router.post("/save", auth, createGroup)
router.get("/getAllGroups", auth, getAllGroups)
router.delete("/deleteAllGroups", auth, deleteAllGroups)

export default router
