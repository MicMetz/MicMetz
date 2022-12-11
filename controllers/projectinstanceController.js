var ProjectInstance = require('../models/ProjectInstance');

const {body, validationResult} = require('express-validator');



exports.projectinstance_list = function(req, res, next) {
    ProjectInstance.find()
        .exec(function (err, list_projectinstances) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('projectinstance_list', { title: 'ProjectInstance List', projectinstance_list: list_projectinstances });
        });
}

exports.projectinstance_detail = function(req, res, next) {
    ProjectInstance.findById(req.params.id)
        .exec(function (err, projectinstance) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('projectinstance_detail', { title: 'ProjectInstance Detail', projectinstance: projectinstance });
        });
}


exports.projectinstance_search = function(req, res, next) {
    ProjectInstance.findById(req.params.id)
        .exec(function (err, projectinstance) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('projectinstance_search', { title: 'ProjectInstance Search', projectinstance: projectinstance });
        });
}


exports.projectinstance_update_list = function(req, res, next) {

}
