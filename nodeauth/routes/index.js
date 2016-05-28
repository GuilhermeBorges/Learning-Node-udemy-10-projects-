var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Members' });
});

/* GET home after login. */
router.get('/calendar', ensureAuthenticated,function(req, res, next) {
  res.render('index', { title: 'Bien venido' });
});


function ensureAuthenticated (req,res,next){
	if(req.isAuthenticated()){//passport authentication api
		return next();
	}
	req.flash('info','You need to log in first');
	res.redirect('users/login');
};//ensureAuthenticated


module.exports = router;
