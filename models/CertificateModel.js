var mongoose = require('mongoose');

var CertificateModel = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    img: {
        type: String
    }
});

module.exports = mongoose.model('certificates', CertificateModel);