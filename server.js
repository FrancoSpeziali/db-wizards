import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import magicSpellRoutes from "./routes/magicspell.js";

const app = express();

dotenv.config();

app.use("/magic-spell", magicSpellRoutes);

console.log("Casting Mongoose database connection spell... 🪄");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("The spell was a success! Database connected! 😍"))
  .catch(() =>
    console.log("Casting spell failed! Database is not connected! ☹️")
  );

app.listen(3001, () => console.log("The server wizard is listening... 🧙"));
