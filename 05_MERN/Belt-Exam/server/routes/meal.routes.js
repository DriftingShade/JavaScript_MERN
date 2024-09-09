import { Router } from "express";
import {
  addMeal,
  getAllMeals,
  getOneMeal,
  updateOneMeal,
  deleteOneMeal,
} from "../controllers/meal.controller.js";

const router = Router();

router.route("/meals").get(getAllMeals).post(addMeal);

router
  .route("/meals/:id")
  .get(getOneMeal)
  .put(updateOneMeal)
  .delete(deleteOneMeal);

export default router;
