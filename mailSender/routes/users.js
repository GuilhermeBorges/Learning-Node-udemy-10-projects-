var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('contact',{
  	'title':'Ola que tal'
  });
});

module.exports = router;
