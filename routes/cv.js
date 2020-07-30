var express = require('express');
var router = express.Router();

var CVModel = require('../models/CVModel');
var ProjectModel = require('../models/ProjectModel');
var CertificateModel = require('../models/CertificateModel');
var ExperienceModel = require('../models/ExperienceModel');


router.get('/test', function(req, res, next) {
    CVModel.find().then((deneme) => {
        res.json(deneme);
    }).catch((err) => {
        res.json(err);
    });
});


router.get('/projects', function(req, res, next) {
    ProjectModel.find().then((projects) => {
            res.json(projects);
        }).catch((err) => {
            res.json(err);
    });

    // ExperienceModel.find(function(err, projects) {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     res.json(projects);
    //   }
    // });

});

router.get('/certificates', function(req, res, next) {
    CertificateModel.find(function(err, certificates) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(certificates);
        }
    });
});

router.get('/experiences', function(req, res, next) {
    ExperienceModel.find(function(err, experiences) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(experiences);
        }
    });
});


module.exports = router;
