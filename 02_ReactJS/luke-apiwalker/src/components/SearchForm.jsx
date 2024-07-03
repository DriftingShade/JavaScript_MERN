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
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center mt-4"
    >
      <div className="form-group mr-2">
        <label className="mr-2">Search for:</label>
        <select
          value={resource}
          onChange={(e) => setResource(e.target.value)}
          className="form-control"
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="films">Films</option>
        </select>
      </div>
      <div className="form-group mr-2">
        <label className="mr-2">ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="form-control"
          placeholder="Enter ID"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
