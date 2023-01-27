const {curry} = require("../libs/functional.lib");

const getDiscounts = curry(async(Discount,root, args, request)=>{
	
	const {input} = args;
	if(!request?.session?.user) 
            throw new Error("There's no session")

    try{
		const discounts = await Discount.find()

		return discounts.map(e=>e.toJSON())
    
    }catch(err){
    	console.log(err)
	    const field = Object.keys(err.keyPattern)[0]

        throw new Error("There was an error")
	}
})

module.exports = getDiscounts