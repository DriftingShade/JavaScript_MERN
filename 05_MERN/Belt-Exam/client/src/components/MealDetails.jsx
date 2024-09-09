import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getMealById, deleteMeal } from "../services/mealService";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id)
      .then((response) => setMeal(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = () => {
    deleteMeal(id)
      .then(() => navigate("/meals"))
      .catch((error) => console.log(error));
  };

  if (!meal) return <div>Loading...</div>;

  const hasIngredients = meal.ingredients.some(
    (ingredient) => ingredient.trim() !== ""
  );

  return (
    <div className="meal-details">
      <h1>{meal.name}</h1>
      <p>Cook Time: {meal.cookTime} minutes</p>
      <p>Ingredients:</p>
      {hasIngredients ? (
        <ul>
          {meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      ) : (
        <p>No ingredients added, yet. Let's add some!</p>
      )}
      <p>Directions: {meal.directions}</p>
      <button onClick={handleDelete}>Remove</button>
      <br />
      <br />
      <Link to="/meals">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default MealDetails;
