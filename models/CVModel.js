var mongoose = require('mongoose');

var CVSchema = new mongoose.Schema({
    name: {
        type: String,
    },
});

module.exports = mongoose.model('cv', CVSchema);