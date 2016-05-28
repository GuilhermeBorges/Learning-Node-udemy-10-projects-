var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register',{
  	'title': 'Register'
  }); //name of the view file + some variables
});


router.get('/register', function(req, res, next) {
  res.render('register',{
  	'title': 'Register'
  }); //name of the view file + some variables
});

router.post('/register', function(req, res, next) {
	//Get Form Values
	var name = req.body.name; //name of name in the jade
	var email = req.body.email;  
	var username = req.body.username; 
	var password = req.body.password; 
	var confirmPassword = req.body.confirmPassword;

	//Check for image Field
	// if(req.files.profileImage){ //THIS ONE IS THE CORRECT, HOWEVER, IT WAS GETTING SOME ERRORS
	if(req.body.profileImage){
		console.log('Uploading File...');
		var profileImageOriginalName = req.files.profileImage.originalName;
		var profileImageName 		 = req.files.profileImage.name;
		var profileImageMime 		 = req.files.profileImage.mimetype;
		var profileImagePath 		 = req.files.profileImage.path;
		var profileImageExt 		 = req.files.profileImage.extension;
		var profileImageSize 		 = req.files.profileImage.size;
	}//if
	else{
		var profileImageName = 'noimage.png';
	}

	//form validation
	//we are using the express-validation for it
	//body name and error message
	req.checkBody('name','Name field is required').notEmpty();//make sure there is something and is not empty
	req.checkBody('email','Email field is required').notEmpty();
	req.checkBody('email','Email is invalid').isEmail();
	req.checkBody('username','Username field is required').notEmpty();
	req.checkBody('password','Password field is required').notEmpty();
	req.checkBody('confirmPassword','Passwords do not match').equals(req.body.password);



	//Check for error
	//If there is an error lets return to the register page however, we want to keep the fields
	var errors = req.validationErrors();
	if(errors){
		res.render('register',{
			errors: errors,
			name:name,
			email:email,
			username:username,
			password:password,
			confirmPassword:confirmPassword
		});//render register
	}//iferrors
	else{
		var newUser = new User({
			name:name,
			email:email,
			username:username,
			password:password,
			profileImage: profileImageName
		});//newUser

		//Create User
		User.createUser(newUser,function(err,user){
			if(err) throw err;
			console.log(user);
		});//createUser
		// Succes Message
		req.flash('success','You are now registered and may log in');
		res.location('/');
		res.redirect('/');
	}//else, create an User
});//post register


router.get('/login', function(req, res, next) {
  res.render('login',{
  	'title': 'Login'
  });
});

//Passsporrrrrrrrrrrt


passport.serializeUser(function(user,done){
	done(null,user.id);
});//serializeUser

passport.deserializeUser(function(id,done){
	User.getUserById(id,function(err,user){
		done(err,user);
	});//getUserById
});//deserializeUser


passport.use(new LocalStrategy(
	function(username,password,done){//done is a callback
		User.getUserByUsername(username,function(err, user){
			if(err) throw err;
			if(!user){ //username does not match anything in the database
				console.log('Unknown User');
				return done(null,false,{message:'Unknown User'});
			}

			User.comparePassword(password,user.password,function (err,isMatch) {
				if(err) throw err;
				if(isMatch){
					return done(null,user);
				}
				else{
					console.log('Invalid Password');
					return done(null,false,{message:'Invalid Password'});
				}
			});//comparePassword
		});//getUserByUsername
	}
));//LocalStrategy

//Passport post logins
router.post('/login',passport.authenticate('local',{failureRedirect:'/users/login',failureFlash:'Invalid username or password'}),function(req,res){
	//it is running if the user authenticate
	console.log('Authentication Successful');
	req.flash('success','You are logged in');
	res.redirect('/');
});

//Although is a get we don't want the user to go to a specific page, we just want to redirect the user and show a message
router.get('/logout',function(req,res){
	req.logout();
	req.flash('success','You have logged out');
	res.redirect('/users/login');
});//GET logout

module.exports = router;
