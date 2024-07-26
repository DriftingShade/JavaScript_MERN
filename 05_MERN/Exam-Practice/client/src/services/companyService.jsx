import axios from "axios";

const API_URL = "http://localhost:8000/api/companies";

const getAllCompanies = async (filters) => {
  try {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCompanyById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addCompany = async (companyData) => {
  try {
    const response = await axios.post(API_URL, companyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateCompany = async (id, companyData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, companyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteCompany = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  getAllCompanies,
  getCompanyById,
  addCompany,
  updateCompany,
  deleteCompany,
};
