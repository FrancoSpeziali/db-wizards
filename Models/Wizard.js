const { Schema, model } = require('mongoose');

const WizardSchema = new Schema({
    name: String,
    description: String,
    age: Number,
    level: Number,
    accuracy: Number,
    critical: Number,
});

const Wizard = model('Wizard', WizardSchema);

module.exports = Wizard;