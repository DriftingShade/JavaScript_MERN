// src/pages/Planet.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import droidsImage from "../assets/Droids.png";

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPlanet(null);
    setError(false);

    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => setPlanet(response.data))
      .catch(() => setError(true));
  }, [id]);

  if (error)
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <p className="card-text">
              These aren't the droids you're looking for
            </p>
            <img src={droidsImage} alt="Obi-Wan Kenobi" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="container mt-5 text-center">
      {planet && (
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{planet.name}</h1>
            <p className="card-text">Climate: {planet.climate}</p>
            <p className="card-text">Terrain: {planet.terrain}</p>
            <p className="card-text">Surface Water: {planet.surface_water}</p>
            <p className="card-text">Population: {planet.population}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planet;
