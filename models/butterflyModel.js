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
    imageUrl:{
      type: String,
      required: false
    }
});

const ButterflyEntry = mongoose.model('butterflyID', butterflyEntrySchema);
module.exports = ButterflyEntry;
