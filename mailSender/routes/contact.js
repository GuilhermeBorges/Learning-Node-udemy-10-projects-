var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' }); //will render index.jade, passing a json object that will be variables to the view
});

router.post('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'guilhermeborgesoliveira@gmail.com',
			pass: 'password' //CHange this for you password
		}

	});//createTransport
	var mailOptions = {
		from: 'Guilherme Oliveira <guilhermeborgesoliveira@gmail.com>',
		to: req.body.email,
		subject: 'WebSite Submission',
		text:'You have a new submission with the following details: \nName:'+req.body.firstName+' '+req.body.lastName+'\nSenha: '+req.body.password,
		html:'<h1>Yoo man!</h1><p>You have a new submission with the following details:<p><ul><li>Name:'+req.body.firstName+' '+req.body.lastName+'</li><li>Senha: '+req.body.password+'</li></ul>'
	};//mailOptions

	transporter.sendMail(mailOptions,function(error,info){
		if(error){
			console.log('That is an error sending the email: '+error);
			res.redirect('/');
		}
		else{
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});//sendMail
});//post('/send')

module.exports = router;
