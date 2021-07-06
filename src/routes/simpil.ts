import { Router } from "express"
import { createSimpil, getSimpilsBetweenTwodates } from "../controllers/simpil"
import auth from "../authentification/auth"

const router = Router()

router.post("/save", auth, createSimpil)
router.post("/byDate", auth, getSimpilsBetweenTwodates)

export default router
