import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/companies")
      .then((response) => setCompanies(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/companies/${id}`)
      .then(() => {
        // Remove the deleted company from the state
        setCompanies((prevCompanies) =>
          prevCompanies.filter((company) => company._id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Company List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th># Of Employees</th>
            <th>Manager Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company._id}>
              <td>{company.name}</td>
              <td>{company.numOfEmployees}</td>
              <td>{company.manager}</td>
              <td>
                <Link to={`/companies/${company._id}/details`}>
                  <button>Company Details</button>
                </Link>
                <Link to={`/companies/${company._id}/update`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(company._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
