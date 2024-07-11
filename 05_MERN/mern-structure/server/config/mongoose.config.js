import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: "peopleDB",
    });
    console.log("DB Connection Successful!");
  } catch (error) {
    console.log("DB Connection Failed!");
    throw error;
  }
}
export default dbConnect;
