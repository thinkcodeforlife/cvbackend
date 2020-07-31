var express = require('express');
var router = express.Router();

var NameModel = require('../models/NameModel');
var ProjectModel = require('../models/ProjectModel');
var CertificateModel = require('../models/CertificateModel');
var ExperienceModel = require('../models/ExperienceModel');
var SkillModel = require('../models/SkillModel');
var AboutModel = require('../models/AboutModel');

router.get('/names', function(req, res, next) {
    NameModel.find(function(err, names) {
        if (err) {
            console.log("apitest->NameModel::err=>", err);
            res.status(500).send(err);
        } else {
            console.log("apitest->NameModel::", names);
            res.status(200).send(names);
        }
    });
});

router.get('/projects', function(req, res, next) {
    ProjectModel.find(function(err, projects) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(projects);
        }
    });
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

router.get('/skills', function(req, res, next) {
    SkillModel.find(function(err, skills) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(skills);
        }
    });
});

router.get('/aboutme', function(req, res, next) {
    AboutModel.find(function(err, aboutme) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(aboutme);
        }
    });
});

module.exports = router;
