const {Schema,model} = require("mongoose");

const OrderSchema = Schema({
	user:{
		type: String,
		required:true,
		unique:false
	},
	products:{
		type:Array,
		required:[true,"The products are obligatory"]
	},
	paymentId:{
		type:String,
		required:[true,"The payment id is obligatory"],
	},
	address:{
		type:Object,
		required:[true,"The address id is obligatory"]
	}
});

OrderSchema.methods.toJSON = function() {
	const {__v,...order} = this.toObject()

	return order;
};

const Order = model("Order",OrderSchema);

module.exports = Order