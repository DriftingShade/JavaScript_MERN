import { useState } from "react";
import "./App.css";

function App() {
  const [stylePicker, setStylePicker] = useState("");

  const styleHandler = (style) => {
    switch (style.length) {
      case 0:
        return "lightMode";
      case 1:
        return "darkMode";
      case 2:
        return "redMode";
      case 3:
        return "blueMode";
      case 4:
        return "pinkMode";
    }
  };

  return (
    <>
      <div className={styleHandler(stylePicker)}>
        <h1>Watch me change!</h1>

        <input onChange={(e) => setStylePicker(e.target.value)} type="text" />
      </div>
    </>
  );
}

export default App;
