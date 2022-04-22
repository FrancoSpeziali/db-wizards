import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import magicSpellRoutes from "./routes/magicSpell.js";

dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use("/magic-spell", magicSpellRoutes);

console.log("Casting Mongoose database connection spell... 🪄");

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("The spell was a success! Database connected! 😍"))
  .catch(() =>
    console.log("Casting spell failed! Database is not connected! ☹️")
  );

app.listen(3001, () => console.log("The server wizard is listening... 🧙"));
