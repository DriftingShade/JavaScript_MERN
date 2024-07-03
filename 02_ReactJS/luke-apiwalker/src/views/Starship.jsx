import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import droidsImage from "../assets/Droids.png";

const Starship = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setStarship(null);
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((response) => setStarship(response.data))
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
      {starship && (
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{starship.name}</h1>
            <p className="card-text">Model: {starship.model}</p>
            <p className="card-text">Manufacturer: {starship.manufacturer}</p>
            <p className="card-text">
              Cost in Credits: {starship.cost_in_credits}
            </p>
            <p className="card-text">Length: {starship.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Starship;
