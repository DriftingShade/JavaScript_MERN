import { Router } from "express";
import ToyController from "../controllers/toy.controller.js";
// import { toys } from "server.js";

const router = Router();

router
  .route("/toys")
  .get(ToyController.getAllToys)
  .post(ToyController.createToy);

router
  .route("/toys/:id")
  .get(ToyController.getOneToy)
  .put(ToyController.updateToy)
  .delete(ToyController.deleteToy);

export default router;
