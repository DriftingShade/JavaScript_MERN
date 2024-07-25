import { Router } from "express";
import {
  addCompany,
  getAllCompanies,
  getOneCompany,
  updateOneCompany,
  deleteOneCompany,
} from "../controllers/company.controller.js";

const router = Router();

router.route("/companies").get(getAllCompanies).post(addCompany);

router
  .route("companies/:id")
  .get(getOneCompany)
  .put(updateOneCompany)
  .delete(deleteOneCompany);

export default router;
