import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PersonDetails from "./views/PersonDetails";
import PersonForm from "./views/PersonForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/create" element={<PersonForm />} />
          <Route path="/people/:id/details" element={<PersonDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
