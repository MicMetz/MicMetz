var express  = require('express');
var router   = express.Router();
const Photos = require('../models/Photo.js');



exports.photo_list = function (req, res, next) {
    Photos.find()
    .exec(function (err, list_photos) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('photo_list', {title: 'Photo List', photo_list: list_photos});
    });
}

exports.photo_detail = function (req, res, next) {
    Photos.findById(req.params.id)
    .exec(function (err, photo) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('photo_detail', {title: 'Photo Detail', photo: photo});
    });
}

exports.photo_image = function (req, res, next) {
    Photos.findById(req.params.id)
    .exec(function (err, photo) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('photo_image', {title: 'Photo Image', photo: photo});
    });
}





