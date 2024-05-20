import express from "express";
import {
  UpdateCategory,
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
} from "../controllers/category.js";

const categoryRouter = express.Router();

//postCategory
//Get all Categorys
//Get Category
//UpDateCategory
//DeleteCategory

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:id", getCategory);
categoryRouter.put("/:id", UpdateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
