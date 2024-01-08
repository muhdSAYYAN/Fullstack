import express from "express"
import { getAllSellers, getAllUsers } from "../controllers/user.js";



const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getAllSellers", getAllSellers);


export default router;