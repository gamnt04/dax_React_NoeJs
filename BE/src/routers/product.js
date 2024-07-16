import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    addProduct, removeProduct,updateProduct
} from "../controllers/product";

const router = Router();
router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.delete("/product/:id", removeProduct);
router.put("/product/:id", updateProduct);
router.post("/product/add_product", addProduct);
export default router;
