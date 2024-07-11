import { Router } from "express";
import {
  createPerson,
  getAllPeople,
  getOnePerson,
  updateOnePerson,
  deleteOnePerson,
} from "../controllers/person.controller.js";

const router = Router();

router.route("/people").get(getAllPeople).post(createPerson);

router
  .route("/people/:id")
  .get(getOnePerson)
  .put(updateOnePerson)
  .delete(deleteOnePerson);

export default router;
