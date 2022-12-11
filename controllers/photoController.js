var Photo = require('../models/Photo.js');
var async = require('async');


const { body,validationResult } = require('express-validator');



exports.photo_list = function(req, res, next) {
    Photo.find()
        .exec(function (err, list_photos) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('photo_list', { title: 'Photo List', photo_list: list_photos });
        });
}

exports.photo_detail = function(req, res, next) {
    Photo.findById(req.params.id)
        .exec(function (err, photo) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('photo_detail', { title: 'Photo Detail', photo: photo });
        });
}

exports.photo_image = function(req, res, next) {
    Photo.findById(req.params.id)
        .exec(function (err, photo) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('photo_image', { title: 'Photo Image', photo: photo });
        });
}


exports.photo_search = function(req, res, next) {
    Photo.findById(req.params.id)
        .exec(function (err, photo) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('photo_search', { title: 'Photo Search', photo: photo });
        });
}


exports.photo_update_list = function(req, res, next) {

}


