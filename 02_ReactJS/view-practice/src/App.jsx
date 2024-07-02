import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./views/LandingPage";
import DisplayDinosaurs from "./views/DisplayDinosaurs";
import DisplayBoardGames from "./views/DisplayBoardGames";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dinosaurs" element={<DisplayDinosaurs />} />
          <Route path="/boardgames" element={<DisplayBoardGames />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
