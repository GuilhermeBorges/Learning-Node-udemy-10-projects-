var mongoose = require ('mongoose');
// var bcrypt = require ('bcrypt');
//telling wich database to use
mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
	username: {type:String, index:true},
	password: {type:String, required:true/*, bcrypt:true*/},
	email: {type:String},
	name: {type:String},
	profileImage: {type:String} //it is not the actually file but the path
});//UserSchema

//Make this object available outside this model
var User = module.exports = mongoose.model('User',UserSchema);

module.exports.createUser = function(newUser,callback){
	// bcrypt.hash(newUser.password, 10, function(err,hash){
	// 	if(err) throw err;
	// 	//set hash password
	// 	newUser.password = hash;
	// 	newUser.save(callback); //removes the outside
	// });//bcrypthash
	newUser.save(callback);
};//createuser

//
module.exports.comparePassword = function(candidatePassword,hash,callback){
	// bcrypt.compare(candidatePassword,hash,function(err,isMatch){
	// 	if(err) return callback(err);
	// 	callback(null,isMatch);
	// });//bcryptcompare

	if(candidatePassword==hash){
		callback(null,true);
	}
	else{
		callback(null,false);
	}
}; //comparePassword

//
module.exports.getUserByUsername = function(username,callback){
	var query = {username:username};
	User.findOne(query,callback);//mongoose
}; //getUserByUsername
//
module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}; //getUserById
