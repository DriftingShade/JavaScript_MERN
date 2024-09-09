import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

const getMeals = () => {
  return axios.get(`${BASE_URL}/meals`);
};

const getMealById = (id) => {
  return axios.get(`${BASE_URL}/meals/${id}`);
};

const createMeal = (meal) => {
  return axios.post(`${BASE_URL}/meals`, meal);
};

const updateMeal = (id, meal) => {
  return axios.put(`${BASE_URL}/meals/${id}`, meal);
};

const deleteMeal = (id) => {
  return axios.delete(`${BASE_URL}/meals/${id}`);
};

export { getMeals, getMealById, createMeal, updateMeal, deleteMeal };
