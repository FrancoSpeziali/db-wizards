import mongoose from "mongoose";

const wizardSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  level: Number,
  accuracy: Number,
  critical: Number,
});

const Wizard = mongoose.model("Wizard", wizardSchema);

export default Wizard;
