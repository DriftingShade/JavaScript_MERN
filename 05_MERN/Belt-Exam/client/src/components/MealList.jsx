import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMeals } from "../services/mealService.js";
import starIcon from "../assets/goldstar.png";

function MealList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals()
      .then((response) => setMeals(response.data))
      .catch((error) => console.log(error));
  }, []);

  const hasAllIngredients = (ingredients) => {
    return (
      ingredients.length === 3 &&
      ingredients.every((ingredient) => ingredient.trim() !== "")
    );
  };

  return (
    <div className="meal-list">
      <h1>Speedy Meals</h1>
      <Link to="/meals/new" className="add-meal">
        <button>Add a meal</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Prep Time</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal._id}>
              <td>
                {meal.name}
                {hasAllIngredients(meal.ingredients) && (
                  <img src={starIcon} alt="Gold Star" className="star-icon" />
                )}
              </td>
              <td>{meal.cookTime}</td>
              <td>
                <Link to={`/meals/${meal._id}`}>Details</Link> |
                <Link to={`/meals/${meal._id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MealList;
