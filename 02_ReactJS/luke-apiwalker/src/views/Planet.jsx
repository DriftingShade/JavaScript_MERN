import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => setPlanet(response.data))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p>These aren't the droids you're looking for</p>;

  return (
    <div>
      {planet && (
        <>
          <h1>{planet.name}</h1>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Population: {planet.population}</p>
        </>
      )}
    </div>
  );
};

export default Planet;
