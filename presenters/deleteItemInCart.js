const {curry} = require("../libs/functional.lib");

const deleteItemInCart =curry( async(UserModel,root, args, request)=>{
	try{

		if(!request?.session?.user) return null

		const {input} = args
		console.log(input)
		const id = request?.session.user
		const user = await UserModel.findById(id)
		const cart = new Map(user.cart)
		
		cart.delete(input)

		user.cart = Array(...cart)
		console.log(user.cart)

		await user.save()
 		
		return {message:"Deleted succesfully"}
			
	}catch(err){
		
		console.log(err)
		
		return null
	}
})

module.exports = deleteItemInCart