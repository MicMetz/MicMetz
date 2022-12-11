var express    = require('express');
var router     = express.Router();
const Projects = require('../models/Project.js');


exports.project_list = function (req, res, next) {
    Projects.find()
    .exec(function (err, list_projects) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('project_list', {title: 'Project List', project_list: list_projects});
    });
}

exports.project_detail = function (req, res, next) {
    Projects.findById(req.params.id)
    .exec(function (err, project) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('project_detail', {title: 'Project Detail', project: project});
    });
}

exports.project_search = function (req, res, next) {
    Projects.findById(req.params.id)
    .exec(function (err, project) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('project_search', {title: 'Project Search', project: project});
    });
}

exports.project_update_list = function (req, res, next) {


}


