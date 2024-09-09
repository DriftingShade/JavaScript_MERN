import { model, Schema } from "mongoose";

const MealSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Meal name is required"],
      minlength: [3, "Meal name must be at least 3 characters long"],
      maxlength: [20, "Meal name must be less than 20 characters long"],
    },
    cookTime: {
      type: Number,
      required: [true, "Cook time is required"],
      min: [2, "Cook time must be at least 2 minutes"],
      max: [240, "Cook time must be less than 240 minutes"],
    },
    directions: {
      type: String,
      required: [true, "Directions are required"],
      minlength: [10, "Directions must be at least 10 characters long"],
    },
    ingredients: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Meal = model("Meal", MealSchema);

export default Meal;
