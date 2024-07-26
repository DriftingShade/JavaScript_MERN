import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    numOfEmployees: "",
    manager: "",
    errors: {},
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/companies/${id}`)
      .then((response) => {
        const company = response.data;
        setFormData({
          name: company.name,
          numOfEmployees: company.numOfEmployees,
          manager: company.manager,
          errors: {},
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCompany = {
      name: formData.name,
      numOfEmployees: formData.numOfEmployees,
      manager: formData.manager,
    };
    axios
      .put(`http://localhost:8000/api/companies/${id}`, updatedCompany)
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
      <h1>Update {formData.name}</h1>
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
        <button type="submit">Update Company</button>
      </form>
    </div>
  );
};

export default UpdateCompany;
