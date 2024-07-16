import { Router } from "express";
import {
    getAllCategorys, getCategoryById,addCategory,removeCategory,updateCategory
} from "../controllers/category";

const router = Router();
router.get("/categorys", getAllCategorys);
router.get("/category/:id", getCategoryById);
router.delete("/category/:id", removeCategory);
router.put("/category/:id", updateCategory);
router.post("/category/add_category", addCategory);
export default router;
