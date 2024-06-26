import { useState } from "react";
import "./App.css";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";

function App() {
  const [liftedState, setLiftedState] = useState([]);

  const stateUpdater = (newValue) => {
    setLiftedState((prevLiftedState) => [...prevLiftedState, newValue]);
  };

  return (
    <>
      <ChildOne stateUpdater={stateUpdater} />
      <ChildTwo liftedState={liftedState} />
    </>
  );
}

export default App;
