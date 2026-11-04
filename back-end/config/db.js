import "dotenv/config";
import mongoose from "mongoose";

const { MONGODB_URL, MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

export const connectDb = async () => {
  try {
   await mongoose.connect(MONGODB_URL);
    console.log("Successfully connected to database!");
  } catch (error) {
    console.error("Couldn't connect to Database: " + error);
  }
};
