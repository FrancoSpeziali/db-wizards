import { Schema, model } from 'mongoose';

const MagicSpellSchema = new Schema({
    name: String,
    description: String,
    cost: Number,
    damage: Number,
    castingTime: Number,
    level: Number,
    range: Number,
    areaOfEffect: Boolean
});

const MagicSpell = model('MagicSpell', MagicSpellSchema);

export default MagicSpell;