import { Router } from "express";
import {
  addBook,
  getAllBooks,
  getOneBook,
  updateOneBook,
  deleteOneBook,
} from "../controllers/book.controller.js";

const router = Router();

router.route("/books").get(getAllBooks).post(addBook);

router
  .route("/books/:id")
  .get(getOneBook)
  .put(updateOneBook)
  .delete(deleteOneBook);

export default router;
