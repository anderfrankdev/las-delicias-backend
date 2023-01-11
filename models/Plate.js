const {Schema,model} = require("mongoose");

const PlateSchema = Schema({
	title:{
		type:String,
		required:[true,"The title is obligatory"],
		unique:true
	},
	images:{
		type:Array,
		required:[true,"At least one image is required"]
	},
	ingridients:{
		type:Array,
		required:[true,"The ingridients are obligatory"],
	},
	price:{
		type:Number,
		required:[true,"The price is obligatory"],
	},
	description:{
		type:String,
		required:true
	},
	stripe_code:{
		type:String,
		required:true
	},
	category:{
		type:String,
		required:true
	}
});

PlateSchema.methods.toJSON = function() {
	const {__v,_id,...plate} = this.toObject()
	plate.id=_id
	return plate;
};

const Plate = model("Plate",PlateSchema);

module.exports = Plate