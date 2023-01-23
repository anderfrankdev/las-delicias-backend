const {curry} = require("../libs/functional.lib");

const selectAddress = curry(async(UserModel,root, args, request)=>{
	
	if(!request?.session?.user) 
		throw new Error("There's no session")

	const {input} = args

	try{	

		const id = request?.session.user
		const user = await UserModel.findById(id)

		const index = user.addresses
			.findIndex(e=>e.id===input)

		if (index===-1) 
			throw new Error("The address do not exists")
		
		const addresses = user.addresses.map(e=>{

			if (e.id===input) {
				e.main=true
			}else{
				e.main=false
			}

			return e
		})	

		console.log(addresses)
		
		await UserModel.findByIdAndUpdate(id,{addresses})
 		
		return {
			message:"Address selected succesfully"
		}
			
	}catch(err){
		
		throw err
		
	}
})

module.exports = selectAddress