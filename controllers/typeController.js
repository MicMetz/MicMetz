var Type = require("../models/PType.js");
var async = require('async');
const { body,validationResult } = require('express-validator');




exports.type_list = function(req, res, next) {
    Type.find()
        .exec(function (err, list_types) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('type_list', { title: 'Type List', type_list: list_types });
        });
}

exports.type_detail = function(req, res, next) {
    Type.findById(req.params.id)
        .exec(function (err, type) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('type_detail', { title: 'Type Detail', type: type });
        });
}


exports.type_search = function(req, res, next) {
    Type.findById(req.params.id)
        .exec(function (err, type) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('type_search', { title: 'Type Search', type: type });
        });
}


exports.type_update_list = function(req, res, next) {


}


