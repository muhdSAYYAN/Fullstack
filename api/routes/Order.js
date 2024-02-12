import express from "express"
import { getOrder, getRecentOrder, postOrder } from "../controllers/Order.js";

const router = express.Router()

router.post("/postOrder",postOrder)
router.get("/getOrder",getOrder)
router.get("/getRecentOrder",getRecentOrder)

export default router;