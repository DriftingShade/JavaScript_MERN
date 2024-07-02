import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Home from "./views/Home";
import People from "./views/People";
import Planet from "./views/Planet";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
