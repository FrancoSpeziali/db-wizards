import mongoose from "mongoose";

const wizardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  age: Number,
  level: Number,
  accuracy: Number,
  critical: Number,
});

const Wizard = mongoose.model("Wizard", wizardSchema);

export default Wizard;
