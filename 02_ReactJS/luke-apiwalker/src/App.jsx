import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Home from "./views/Home";
import Character from "./views/Character";
import Planet from "./views/Planet";
import Starship from "./views/Starship";

const App = () => {
  return (
    <Router>
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="/starships/:id" element={<Starship />} />
      </Routes>
    </Router>
  );
};

export default App;
