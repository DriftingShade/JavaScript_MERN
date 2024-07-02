import { useState } from "react";

const SearchForm = () => {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for:
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
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
