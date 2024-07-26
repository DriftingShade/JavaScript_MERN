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

  return (
    <div>
      <h1>Company List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th># Of Employees</th>
            <th>Manager Name</th>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
