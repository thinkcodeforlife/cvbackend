var express = require('express');
var router = express.Router();

var ProjectModel = require('../models/ProjectModel');
var CVModel = require('../models/CVModel');

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

router.get('/test', function(req, res, next) {
    CVModel.find().then((deneme) => {
        res.json(deneme);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
