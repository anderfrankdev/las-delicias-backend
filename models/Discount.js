const {Schema,model} = require("mongoose");

const DiscountSchema = Schema({
	title:{
		type: String,
		required:true,
		unique:false
	},
	percentage:{
		type: Number,
		required:true,
		unique:false
	},
	stripe_price:{
		type:String,
		required:true
	},
	stripe_discount:{
		type:String,
		required:true
	},
	image:{
		type:String,
		required:true
	}
});

DiscountSchema.methods.toJSON = function() {
	const {__v,...order} = this.toObject()

	return order;
};

const Discount = model("Discount",DiscountSchema);

module.exports = Discount