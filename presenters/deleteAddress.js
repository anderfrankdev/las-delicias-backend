const {curry} = require("../libs/functional.lib");

const deleteAddress = curry(async(UserModel,root, args, request)=>{
	
	if(!request?.session?.user) 
		throw new Error("There's no session")

	const {input} = args

	try{	

		const id = request?.session.user
		const user = await UserModel.findById(id)
		
		const index = user.addresses.findIndex(e=>e.id===input)		

		if (index===-1) 
			throw new Error("The address do not exists")
		else user.addresses.splice(index,1)

		await user.save()
 		
		return {
			message:"Deleted succesfully"
		}
			
	}catch(err){
		
		throw err
		
	}
})

module.exports = deleteAddress