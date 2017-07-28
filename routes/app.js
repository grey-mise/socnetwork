var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Tanya',
        lastName: 'Tan',
        email: email,
        password: 'pass'
    });
    user.save();
    res.redirect('/');
});

router.post('/message', function (req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});

module.exports = router;
