import { useState } from "react";
import "./App.css";
import BoxForm from "./Components/BoxForm";
import BoxDisplay from "./Components/BoxDisplay";

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const deleteBox = (index) => {
    setBoxes(boxes.filter((box, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxForm onAddBox={addBox} />
      <BoxDisplay boxes={boxes} onDeleteBox={deleteBox} />
    </div>
  );
}

export default App;
