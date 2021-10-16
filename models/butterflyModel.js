const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const butterflyEntrySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    family: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});

const ButterflyEntry = mongoose.model('Butterfly Entry', butterflyEntrySchema);
module.exports = ButterflyEntry;
