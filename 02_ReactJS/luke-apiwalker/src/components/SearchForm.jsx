import { useState } from "react";

const SearchForm = () => {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-75 mx-auto text-center">
      <label className="form-label">
        Search for:
        <select className="form-select ms-2" value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
      </label>
      <label className="form-label"> 
        ID:
        <input
          className="form-control ms-3"
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
        />
      </label>
      <button type="submit" className="btn btn-primary ms-4">Search</button>
    </form>
  );
};

export default SearchForm;
