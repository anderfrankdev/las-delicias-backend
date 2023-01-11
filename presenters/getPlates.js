const {curry} = require("../libs/functional.lib");

const getPlates = curry(async(PlateModel,root, args, request)=>{
	try{

		if(!request?.session?.user) return null


		let products = await PlateModel
			.find()

		if(products)
			return products.map(e=>e.toJSON())
		else
			return null
			
	}catch(err){
		
		
		return null
	}
})

module.exports = getPlates