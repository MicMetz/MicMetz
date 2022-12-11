var Project = require('../models/Project');
var Type    = require('../models/PType.js');


const {body, validationResult} = require('express-validator');



var async = require('async');

exports.index = function (req, res) {
    async.parallel({
        project_count: function (callback) {
            Project.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        type_count   : function (callback) {
            Type.countDocuments({}, callback);
        },
    }, function (err, results) {
        res.render('index', {title: 'Michael Metzger', error: err, data: results});
    });
}

exports.project_list = function (req, res, next) {
    Project.find({}, 'title')
    .exec(function (err, list_projects) {
        if (err) {return next(err);}
        // Successful, so render
        res.render('project_list', {title: 'Project List', project_list: list_projects});
    });
}


exports.project_detail = function (req, res, next) {
    async.parallel({
        project: function (callback) {
            Project.findById(req.params.id)
            .exec(callback);
        },
    }, function (err, results) {
        if (err) {return next(err);}
        if (results.project == null) { // No results.
            var err    = new Error('Project not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('project_detail', {title: 'Project Detail', project: results.project});
    });
}


exports.project_search = function (req, res, next) {
    async.parallel({
        project: function (callback) {
            Project.findById(req.params.id)
            .exec(callback);
        },
    }, function (err, results) {
        if (results.project == null) { // No results.
            var err    = new Error('Project not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('project_search', {title: 'Project Search', project: results.project});
    });
}


exports.project_update_list = function (req, res, next) {
    async.parallel({
        project: function (callback) {
            Project.findById(req.params.id)
            .exec(callback);
        },
    }, function (err, results) {
        if (err) {return next(err);}
        if (results.project == null) { // No results.
            var err    = new Error('Project not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('project_update_list', {title: 'Project Update List', project: results.project});
    });
}
