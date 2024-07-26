import Company from "../models/company.model.js";

async function addCompany(req, res) {
  try {
    const newCompany = await Company.create(req.body);
    res.json(newCompany);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllCompanies(req, res) {
  try {
    const filters = req.query;
    const allCompanies = await Company.find(filters);
    res.json(allCompanies);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getOneCompany(req, res) {
  try {
    const foundCompany = await Company.findById(req.params.id);
    res.json(foundCompany);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updateOneCompany(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedCompany);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteOneCompany(req, res) {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    res.json(deletedCompany);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export {
  addCompany,
  getAllCompanies,
  getOneCompany,
  updateOneCompany,
  deleteOneCompany,
};
