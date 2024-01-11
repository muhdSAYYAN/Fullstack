import express from  "express"
import { addProduct, getProduct } from "../controllers/addProduct.js"

const router = express.Router();


router.get('/getProduct',getProduct);
router.post('/uploadProduct',addProduct);


export default router;