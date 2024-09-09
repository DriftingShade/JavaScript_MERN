import Meal from "../models/meal.model.js";

async function addMeal(req, res) {
  try {
    const newMeal = await Meal.create(req.body);
    res.json(newMeal);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllMeals(req, res) {
  try {
    const allMeals = await Meal.find();
    res.json(allMeals);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getOneMeal(req, res) {
  try {
    const foundMeal = await Meal.findById(req.params.id);
    res.json(foundMeal);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updateOneMeal(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedMeal);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteOneMeal(req, res) {
  try {
    const deletedMeal = await Meal.findByIdAndDelete(req.params.id);
    res.json(deletedMeal);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { addMeal, getAllMeals, getOneMeal, updateOneMeal, deleteOneMeal };
