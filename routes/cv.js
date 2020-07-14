var express = require('express');
var router = express.Router();

var ExperienceModel = require('../models/ExperienceModel');
var CVModel = require('../models/CVModel');

router.get('/experiences', function(req, res, next) {
    ExperienceModel.find().then((experiences) => {
            res.json(experiences);
        }).catch((err) => {
            res.json(err);
    });

    // ExperienceModel.find(function(err, experiences) {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     res.json(experiences);
    //   }
    // });

});

router.get('/test', function(req, res, next) {
    CVModel.find({}).then((deneme) => {
        res.json(deneme);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
