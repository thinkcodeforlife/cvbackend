var mongoose = require('mongoose');

var AboutmeSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    symbol: {
        type: String,
    },
});

var ContactSchema = new mongoose.Schema({
    tel: new mongoose.Schema({
        no: {
            type: String
        },
        symbol: {
            type: String,
        },
    }),
    email: new mongoose.Schema({
        content: {
            type: String
        },
        symbol: {
            type: String,
        },
    }),
    skype: new mongoose.Schema({
        content: {
            type: String
        },
        symbol: {
            type: String,
        },
    }),
    symbol: {
        type: String,
    },
});

var QuotesSchema = new mongoose.Schema({
    content: {
        type: Array,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
});

var FollowSchema = new mongoose.Schema({
    content: [{url: String, symbol: String}],
    symbol: {
        type: String,
        required: true
    },
});

var InterestsSchema = new mongoose.Schema({
    content: {
        type: Array,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
});

var AboutSchema = new mongoose.Schema({
    aboutme: AboutmeSchema,
    contact: ContactSchema,
    favoriteQuotes: QuotesSchema,
    followme: FollowSchema,
    interests: InterestsSchema,
});

// var AboutSchema2 = new mongoose.Schema({
//     aboutme: {content: String, symbol: String},
//     contact: {
//         tel: {no: String, symbol: String},
//         email: {content: String, symbol: String},
//         skype: {content: String, symbol: String},
//         symbol: String
//     },
//     favoriteQuotes: {content: Array, symbol: String},
//     followme: {content: [{url: String, symbol: String}], symbol: String},
//     interests: {content: Array, symbol: String},
// });

module.exports = mongoose.model('aboutme', AboutSchema);