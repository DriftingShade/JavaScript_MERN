// src/pages/Starship.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Starship = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((response) => setStarship(response.data))
      .catch(() => setError(true));
  }, [id]);

  if (error)
    return (
      <div>
        <p>These aren't the droids you're looking for</p>
        <img src="https://path/to/obi-wan-kenobi.jpg" alt="Obi-Wan Kenobi" />
      </div>
    );

  return (
    <div>
      {starship && (
        <>
          <h1>{starship.name}</h1>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Cost in Credits: {starship.cost_in_credits}</p>
          <p>Length: {starship.length}</p>
        </>
      )}
    </div>
  );
};

export default Starship;
