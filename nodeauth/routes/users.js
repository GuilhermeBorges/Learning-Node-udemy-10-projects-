var express = require('express');
var router = express.Router();

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
		// var newUser = new User({
		// 	name:name,
		// 	email:email,
		// 	username:username,
		// 	password:password,
		// 	profileImage: profileImageName
		// });//newUser

		// //Create User
		// User.createUsers(newUser,function(err,user){
		// 	if(err) throw err;
		// 	console.log(user);
		// });//createUser
		//Succes Message
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


module.exports = router;
