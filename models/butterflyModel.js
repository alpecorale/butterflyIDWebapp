const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const butterflyEntrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    color: {
        type: Array,
        required: true
    },
    hwColor:{
        type: Array,
        required: true
    },
    pattern:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    hooked:{
        type: String,
        required: true
    },
    shape:{
        type: String,
        required: true
    },
    tails:{
        type: String,
        required: true
    }
});

const ButterflyEntry = mongoose.model('butterflyID', butterflyEntrySchema);
module.exports = ButterflyEntry;
