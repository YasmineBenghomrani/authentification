import express from "express";
import {
  UpdateFood,
  createFood,
  deleteFood,
  getAllFood,
  getFood,
} from "../controllers/food.js";

const foodRouter = express.Router();

//postFood
//Get all foods
//Get food
//UpDateFood
//DeleteFood

foodRouter.post("/", createFood);
foodRouter.get("/", getAllFood);
foodRouter.get("/:id", getFood);
foodRouter.put("/:id", UpdateFood);
foodRouter.delete("/:id", deleteFood);

export default foodRouter;
