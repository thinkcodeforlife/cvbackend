var mongoose = require('mongoose');

var NameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('name', NameSchema);