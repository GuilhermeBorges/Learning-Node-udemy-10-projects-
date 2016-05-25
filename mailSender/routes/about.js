var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' }); //will render index.jade, passing a json object that will be variables to the view
});

module.exports = router;
