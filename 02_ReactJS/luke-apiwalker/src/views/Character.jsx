// src/pages/Character.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setCharacter(response.data);
        return axios.get(response.data.homeworld);
      })
      .then((response) => setHomeworld(response.data))
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
      {character && (
        <>
          <h1>{character.name}</h1>
          <p>Height: {character.height} cm</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Skin Color: {character.skin_color}</p>
          {homeworld && (
            <>
              <p>Homeworld: {homeworld.name}</p>
              <Link to={`/planets/${homeworld.url.match(/\/(\d+)\/$/)[1]}`}>
                Homeworld
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Character;
