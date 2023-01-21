const {curry} = require("../libs/functional.lib");

const addToCart =curry( async(UserModel,root, args, request)=>{
	try{

		if(!request?.session?.user) return null

		const {input} = args
		const id = request?.session.user
		const user = await UserModel.findById(id)
		const cart = new Map(user.cart)
		input.forEach(e=>{
			
			const [id,quantity] = e 
			
			if (cart.get(id)) {
				const newQuantity = Number(cart.get(id))
					+ Number(quantity);

				cart.set(id,`${newQuantity}`)
			}else{
				cart.set(id,quantity)
			}
	
		})
		user.cart = Array(...cart)
		console.log(user.cart)

		await user.save()
 		
		return {message:"Added succesfully"}
			
	}catch(err){
		
		console.log(err)
		
		return null
	}
})

module.exports = addToCart