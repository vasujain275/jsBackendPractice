import mongoose from "mongoose";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed - ", err);
  });
