// Import necessary modules (Don't forget Routes!)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/person.routes.js";

dbConnect();

const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
