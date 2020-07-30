var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
    tech: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('skills', SkillSchema);