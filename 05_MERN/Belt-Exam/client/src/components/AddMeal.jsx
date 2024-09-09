import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createMeal } from "../services/mealService.js";

function AddMeal() {
  const [state, setState] = useState({
    meal: { name: "", cookTime: "", directions: "", ingredients: ["", "", ""] },
    errors: {},
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({
      ...state,
      meal: { ...state.meal, [e.target.name]: e.target.value },
    });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = state.meal.ingredients.map((ingredient, i) =>
      i === index ? value : ingredient
    );
    setState({
      ...state,
      meal: { ...state.meal, ingredients: newIngredients },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMeal(state.meal)
      .then((response) => {
        navigate("/meals");
      })
      .catch((error) => {
        setState({
          ...state,
          errors: error.response.data.errors,
        });
      });
  };

  return (
    <div className="add-meal">
      <h1>Add Meal</h1>
      <Link to="/meals">
        <button>Back To Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dish Name</label>
          <input
            type="text"
            name="name"
            value={state.meal.name}
            onChange={handleChange}
            className={state.errors.name ? "input-error" : ""}
          />
          {state.errors.name && (
            <p className="error">{state.errors.name.message}</p>
          )}
        </div>
        <div>
          <label>Total Minutes</label>
          <input
            type="number"
            name="cookTime"
            value={state.meal.cookTime}
            onChange={handleChange}
            className={state.errors.cookTime ? "input-error" : ""}
          />
          {state.errors.cookTime && (
            <p className="error">{state.errors.cookTime.message}</p>
          )}
        </div>
        <div>
          <label>Directions</label>
          <textarea
            name="directions"
            value={state.meal.directions}
            onChange={handleChange}
            className={state.errors.directions ? "input-error" : ""}
          />
          {state.errors.directions && (
            <p className="error">{state.errors.directions.message}</p>
          )}
        </div>
        <div>
          <label>Ingredients</label>
          {state.meal.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
            />
          ))}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddMeal;