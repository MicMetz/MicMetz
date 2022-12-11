var Photo           = require('../models/Photo.js');
var Project         = require('../models/Project.js');
var Type            = require('../models/PType.js');
var ProjectInstance = require('../models/ProjectInstance.js');
var async           = require('async');
var fs              = require('fs');

const {body, validationResult} = require('express-validator');



exports.catalog_list = function (req, res, next) {
    async.parallel({
        works      : function (callback) {
            Project.find()
            .populate('projects')
            .exec(callback);
            Photo.find()
            .populate('photos')
            .exec(callback);
            Type.find()
            .populate('types')
            .exec(callback);
        },
        works_count: function (callback) {
            Project.countDocuments({}, callback);
            Photo.countDocuments({}, callback);
            Type.countDocuments({}, callback);

        },
    }, function (err, results) {
        res.render('works_list', {title: 'Works List', works_list: results.works, works_count: results.works_count});
    });
}


exports.catalog_list_count = function (req, res, next) {
    async.parallel({
        project_count        : function (callback) {
            Project.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        photo_count          : function (callback) {
            Photo.countDocuments({}, callback);
        },
        type_count           : function (callback) {
            Type.countDocuments({}, callback);
        },
        projectinstance_count: function (callback) {
            ProjectInstance.countDocuments({}, callback);
        }
    }, function (err, results) {
        res.render('catalog_list', {title: 'Catalog List', error: err, data: results});
    });
}
