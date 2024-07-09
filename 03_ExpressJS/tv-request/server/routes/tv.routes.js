import { Router } from "express";
import tvController from "../controllers/tv.controller.js";

const router = Router();

router.route("/shows").get(tvController.getAllShows).post(tvController.addShow);

router.route("/shows/:year").get(tvController.getShowsByYear);

router
  .route("/shows/:title")
  .delete(tvController.deleteShowByTitle)
  .patch(tvController.updateStarring);

export default router;
