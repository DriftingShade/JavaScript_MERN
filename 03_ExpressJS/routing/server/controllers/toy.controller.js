import { toys } from "../server.js";

const ToyController = {
  getAllToys: (req, res) => {
    res.json(toys);
  },

  createToy: (req, res) => {
    toys.push(req.body);
    console.log(req.body);
    res.json(toys);
  },

  getOneToy: (req, res) => {
    console.log(req.params.id);
    const getToyById = toys.find((toy) => toy.id == req.params.id);
    res.json(getToyById);
  },

  updateToy: (req, res) => {
    toys.forEach((toy, idx) => {
      if (toy.id == req.params.id) {
        toy = { ...toy, ...req.body };
        toys[idx] = toy;
      }
    });
    const updatedToy = toys.find((toy) => toy.id == req.params.id);
    res.json(updatedToy);
  },

  deleteToy: (req, res) => {
    const toyId = req.params.id;
    const index = toys.findIndex((toy) => toy.id == toyId);
    toys.splice(index, 1);
    res.json(toys);
  },
};

export default ToyController;
