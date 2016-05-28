var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


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
