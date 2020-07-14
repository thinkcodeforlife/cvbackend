var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    stack: {
        type: Array,
        required: true
    }
})
module.exports = mongoose.model('projects', ProjectSchema);