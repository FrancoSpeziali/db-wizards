const { Schema, model } = require('mongoose');

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

module.exports = MagicSpell;