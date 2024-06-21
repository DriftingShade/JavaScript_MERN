import { useState } from "react";
import "./App.css";
import Calculation from "./components/Calculation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calculation state="California" salesTax={0.0725} />
      <Calculation state="New York" salesTax={0.04} />
      <Calculation state="Texas" salesTax={0.0625} />
    </>
  );
}

export default App;
