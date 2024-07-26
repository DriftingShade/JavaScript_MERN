import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    numOfEmployees: "",
    manager: "",
    errors: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompany = {
      name: formData.name,
      numOfEmployees: formData.numOfEmployees,
      manager: formData.manager,
    };
    axios
      .post("http://localhost:8000/api/companies", newCompany)
      .then(() => navigate("/home"))
      .catch((err) =>
        setFormData((prevData) => ({
          ...prevData,
          errors: err.response.data.errors,
        }))
      );
  };

  return (
    <div>
      <h1>Add A Company</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        {formData.errors.name && (
          <p style={{ color: "red" }}>{formData.errors.name.message}</p>
        )}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label># Of Employees</label>
        {formData.errors.numOfEmployees && (
          <p style={{ color: "red" }}>
            {formData.errors.numOfEmployees.message}
          </p>
        )}
        <input
          type="number"
          name="numOfEmployees"
          value={formData.numOfEmployees}
          onChange={handleChange}
          required
        />
        <label>Manager</label>
        {formData.errors.manager && (
          <p style={{ color: "red" }}>{formData.errors.manager.message}</p>
        )}
        <input
          type="text"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
