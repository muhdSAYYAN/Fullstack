import express from "express"
import { postOrder } from "../controllers/Order.js";

const router = express.Router()

router.post("/postOrder",postOrder)

export default router;