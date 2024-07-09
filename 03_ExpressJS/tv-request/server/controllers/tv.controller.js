import { tvShows } from "../models/tv.model.js";

const tvController = {
  getAllShows: (req, res) => {
    res.json(tvShows);
  },

  getShowsByYear: (req, res) => {
    const year = parseInt(req.params.year);
    const showsByYear = tvShows.filter((show) => show.yearCreated === year);
    res.json(showsByYear);
  },

  deleteShowByTitle: (req, res) => {
    const title = req.params.title;
    const index = tvShows.findIndex((show) => show.tvShow === title);
    if (index !== -1) {
      tvShows.splice(index, 1);
    }
    res.json(tvShows);
  },

  updateStarring: (req, res) => {
    const title = req.params.title;
    const { starring } = req.body;
    const show = tvShows.find((show) => show.tvShow === title);
    if (show) {
      show.starring = starring;
    }
    res.json(tvShows);
  },

  addShow: (req, res) => {
    const newShow = req.body;
    tvShows.push(newShow);
    res.json(tvShows);
  },
};

export default tvController;
