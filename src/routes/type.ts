import { Router } from "express"
import { getAllTypes, deleteAllTypes, crateAtype } from "../controllers/type"
import auth from "../authentification/auth"

const router = Router()

router.get("/getAllTypes", auth, getAllTypes)
router.delete("/deleteAllTypes", auth, deleteAllTypes)
router.post("/createAType", auth, crateAtype)

export default router
