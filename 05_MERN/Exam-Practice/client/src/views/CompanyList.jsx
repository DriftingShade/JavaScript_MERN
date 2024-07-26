import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCompanies, deleteCompany } from "../services/companyService";

const CompanyList = () => {
  const [state, setState] = useState({
    companies: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    getAllCompanies()
      .then((companies) => {
        setState({ companies, loading: false, error: null });
      })
      .catch((error) => {
        setState({ companies: [], loading: false, error: error.message });
      });
  }, []);

  const handleDelete = (id) => {
    deleteCompany(id)
      .then(() => {
        setState((prevState) => ({
          ...prevState,
          companies: prevState.companies.filter(
            (company) => company._id !== id
          ),
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          error: error.message,
        }));
      });
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

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
          {state.companies.map((company) => (
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
