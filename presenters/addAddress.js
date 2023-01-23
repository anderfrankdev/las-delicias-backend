const {curry} = require("../libs/functional.lib");
const {validateAddress} = require("../libs/objectValidation");
const {uid} = require("uid")

const addAddress =curry( async(UserModel,root, args, request)=>{
	
	if(!request?.session?.user) 
		throw new Error("There's no session")

	const {input} = args
		
	const address = validateAddress(input)
	if(address.invalid){
		const {invalidFields} = address
		throw new Error("The following fields are invalid: "+
			`${invalidFields}`.replaceAll(",",", "))
	}

	try{	

		const id = request?.session.user
		const user = await UserModel.findById(id)
		let exists;
		user.addresses.forEach(e=>{
			const {id,main,...rest} = e
			const isEqual = JSON.stringify(rest)===
				JSON.stringify(input)
			if (isEqual) exists=true
		})
		
		if (exists) 
			throw new Error("The address already exists")
		
		const address = {
			id:uid(),
			...input,
			main:
				user.addresses.length<1
				? true
				: false
		}
		user.addresses.push(address)

		await user.save()
 		
		return {
			message:"Added succesfully",
			id:address.id
		}
			
	}catch(err){
		
		throw err
		
	}
})

module.exports = addAddress