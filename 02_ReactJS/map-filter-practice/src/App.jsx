import { useState } from "react";
import MapComponent from "./components/MapComponent";
import FilterComponent from "./components/FilterComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MapComponent /> */}
      <FilterComponent />
    </>
  );
}

export default App;
