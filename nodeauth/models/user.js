var mongoose = require ('mongoose');

//telling wich database to use
mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
	username: {type:String, index:true},
	password: {type:String},
	email: {type:String},
	name: {type:String},
	profileImage: {type:String} //it is not the actually file but the path
});//UserSchema

//Make this object available outside this model
var User = module.exports = mongoose.model('User',UserSchema);


module.exports.createUser = function(newUser,callback){
	newUser.save(callback);
};//createuser