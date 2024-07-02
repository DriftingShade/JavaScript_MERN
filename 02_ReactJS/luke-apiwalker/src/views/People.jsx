import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const People = () => {
  const { id } = useParams;
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => setCharacter(response.data))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p>These aren't the droids you're looking for</p>;

  return (
    <div>
      {character && (
        <>
          <h1>{character.name}</h1>
          <p>Height: {character.height} cm</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Skin Color: {character.skin_color}</p>
        </>
      )}
    </div>
  );
};

export default People;
