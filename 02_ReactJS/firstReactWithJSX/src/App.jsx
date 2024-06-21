import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center">
        <h1>Hello Dojo!</h1>
        <h3>Things I Need To Do:</h3>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
          <li>Get That Black Belt!</li>
        </ul>
      </div>
    </>
  );
}

export default App;
