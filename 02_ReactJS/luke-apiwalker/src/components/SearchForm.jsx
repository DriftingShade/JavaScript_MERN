// src/components/SearchForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${resource}/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for:
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="films">Films</option>
        </select>
      </label>
      <label>
        ID:
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
