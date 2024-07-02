import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import WordWithColors from "./components/WordWithColors";

const ParamRouter = () => {
  const { param1, param2, param3 } = useParams();

  if (!isNaN(param1)) {
    return <Number number={param1} />;
  } else if (param1 && param2 && param3) {
    return <WordWithColors word={param1} color={param2} bgColor={param3} />;
  } else {
    return <Word word={param1} />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:param1/:param2?/:param3?" element={<ParamRouter />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
