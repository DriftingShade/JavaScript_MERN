import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Submitter from "./components/Submitter";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submitter" element={<Submitter />} />
          <Route path="/details/:paramOne/:paramTwo" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
