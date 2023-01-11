const {curry} = require("../libs/functional.lib");

const createPlate = curry(async(Plate,root, args, request)=>{
	
	const {input} = args;
	if(!request?.session?.user) 
            throw new Error("There's no session")

	if (!input.title)
		throw new Error("The title is required to signup");
	if (!input.images) 
		throw new Error("At least one image is required");
    if (!input.ingridients)
		throw new Error("The ingridients are obligatory");
	if (!input.price)
		throw new Error("The price is obligatory");

    try{
		const plate = new Plate(input)
	    const created = await plate.save()
        return created.toJSON()
    }catch(err){
    	console.log(err)
	    const field = Object.keys(err.keyPattern)[0]

        throw new Error("There is already a saved "+
		`plate with this ${field}`)
	}
})

module.exports = createPlate