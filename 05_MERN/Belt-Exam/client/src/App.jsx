import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MealList from "./components/MealList";
import AddMeal from "./components/AddMeal";
import MealDetails from "./components/MealDetails";
import EditMeal from "./components/EditMeal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/meals" />} />
        <Route path="/meals" element={<MealList />} />
        <Route path="/meals/new" element={<AddMeal />} />
        <Route path="/meals/:id" element={<MealDetails />} />
        <Route path="/meals/:id/edit" element={<EditMeal />} />
      </Routes>
    </Router>
  );
}

export default App;
