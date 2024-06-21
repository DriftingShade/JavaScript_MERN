import { useState } from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      <PersonCard
        firstName="Shane"
        lastName="Nosack"
        initialAge={33}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Bob"
        lastName="Evans"
        initialAge={84}
        hairColor="Bald"
      />
    </>
  );
}

export default App;
