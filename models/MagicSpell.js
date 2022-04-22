import mongoose from "mongoose";

const magicSpellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  cost: Number,
  damage: Number,
  castingTime: Number,
  level: Number,
  range: Number,
  areaOfEffect: Boolean,
});

const MagicSpell = mongoose.model("MagicSpell", magicSpellSchema);

export default MagicSpell;
