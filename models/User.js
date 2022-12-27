const {Schema,model} = require("mongoose");

const UserSchema = Schema({
	name:{
		type:String,
		required:[true,"The name is obligatory"]
	},
	password:{
		type:String,
		required:[true,"The password is obligatory"]
	},
	email:{
		type:String,
		required:[true,"The email is obligatory"],
		unique:true
	},
	cart:{
		type:Array,
		required:false
	},
	favourites:{
		type:Array,
		required:false
	},
	orders:{
		type:Array,
		required:false
	}
});

UserSchema.methods.toJSON = function() {
	const {__v, _id,password,...user} = this.toObject()

	return user;
};

const User = model("User",UserSchema);

module.exports = User