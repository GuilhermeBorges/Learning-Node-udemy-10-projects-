var express = require('express');
var router = express.Router();


//------------------------------------------------------------------//
//---------------------------- ANYONE ------------------------------//
//------------------------------------------------------------------//

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.isAuthenticated())
  	res.render('index', { title: 'USU' });
  else
  	res.render('index', { title: 'Members' });
});



//------------------------------------------------------------------//
//------------------- JUST NEED TO BE A USER -----------------------//
//------------------------------------------------------------------//


/* GET home after login. */
router.get('/calendar', ensureAuthenticated,function(req, res, next) {
  res.render('user/calendar', { title: 'Bien venido' });
});




//------------------------------------------------------------------//
//------------------- JUST FOR BUREAU USER -------------------------//
//------------------------------------------------------------------//


/* GET home after login. */
router.get('bureau/calendar', ensureAuthenticatedBureuau,function(req, res, next) {
  res.render('bureau/index', { title: 'Bien venido' });
});


// 

function ensureAuthenticated (req,res,next){
	if(req.isAuthenticated()){//passport authentication api
		return next();
	}
	req.flash('info','You need to log in first');
	res.redirect('users/login');
};//ensureAuthenticated


function ensureAuthenticatedBureuau (req,res,next){
	if(req.isAuthenticated()){//passport authentication api
		if(req.user.bureau)
			return next();
		else{
			req.flash('error','You do not have access to this page');
			res.redirect('/');
		}
	}
	else{		
		req.flash('info','You need to log in first');
		res.redirect('users/login');
	}
};//ensureAuthenticatedBureuau


module.exports = router;
