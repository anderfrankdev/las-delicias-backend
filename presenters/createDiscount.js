const {curry} = require("../libs/functional.lib");

const createDiscount = curry(async(Models,root, args, request)=>{
	const {Plate,Discount} = Models
	
	const {input} = args;
	if(!request?.session?.user) 
            throw new Error("There's no session")

	if (!input.stripe_price)
		throw new Error("The price id is required");
	
    if (!input.stripe_discount)
		throw new Error("The stripe discount id is obligatory");
	if (!input.percentage)
		throw new Error("The percentage discount is obligatory");

    try{
		const plate = await Plate.findOne({
			stripe_code:input.stripe_price
		})

		if (!plate) throw new Error()
		input.image = plate.images[0]
		input.title = plate.title
		const discount = new Discount(input)
		discount.save()
        return {message:"Discount created"}
    }catch(err){
    	console.log(err)
	    const field = Object.keys(err.keyPattern)[0]

        throw new Error("There was an error")
	}
})

module.exports = createDiscount