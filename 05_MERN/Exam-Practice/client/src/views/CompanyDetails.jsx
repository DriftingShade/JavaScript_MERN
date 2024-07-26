import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CompanyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/companies/${id}`)
      .then((response) => setCompany(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleBorrow = () => {
    axios
      .delete(`http://localhost:8000/api/companies/${id}`)
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  return company ? (
    <div className="book-details">
      <h1>{company.name}</h1>
      <p>By {company.numOfEmployees}</p>
      <p>Pages: {company.manager}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CompanyDetails;
