var express = require('express');
var Host = require('../models/Host');//Post를 사용
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.get('/host', function(req, res, next) {
    res.render('host');
});
module.exports = router;
