var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Michael Metzger'});
});


router.get('/contact', function (req, res, next) {
    res.render('pages/contact', {title: 'Contact Me'});
});


router.get('/about', function (req, res, next) {
    res.render('pages/about', {title: 'Who I Am?'});
});


router.get('/death_throes', function (req, res, next) {
    res.render('pages/death_throes', {title: 'Death Throes'});
});


router.get('/photography', function (req, res, next) {
    res.render('pages/photography');
});

module.exports = router;
