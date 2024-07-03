import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import droidsImage from "../assets/Droids.png";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCharacter(null);
    setHomeworld(null);
    setError(false);

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
      {character && (
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{character.name}</h1>
            <p className="card-text">Height: {character.height} cm</p>
            <p className="card-text">Hair Color: {character.hair_color}</p>
            <p className="card-text">Eye Color: {character.eye_color}</p>
            <p className="card-text">Skin Color: {character.skin_color}</p>
            {homeworld && (
              <>
                <p className="card-text">
                  <Link
                    to={`/planets/${homeworld.url.match(/\/(\d+)\/$/)[1]}`}
                    className="btn btn-link"
                  >
                    Homeworld: {homeworld.name}
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
