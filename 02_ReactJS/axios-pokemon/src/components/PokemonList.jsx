import { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.error("There was an error fetching the Pokemon data!", error);
      });
  }, []);

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

  return (
    <div>
      <h1 className="my-3">Pokemon API</h1>
      <h3 className="my-3">Gotta Catch 'Em All!</h3>
      <ul className="list-group my-5">
        {pokemon.map((poke, index) => (
          <li key={index} className="list-group-item text-capitalize">
            {poke.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
