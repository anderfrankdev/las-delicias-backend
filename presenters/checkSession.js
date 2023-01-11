const {curry} = require("../libs/functional.lib");

const checkSession = curry(async(UserModel,root, args, request)=>{
		
	try{

		if(!request?.session?.user) return null


		const user = await UserModel.findById(request?.session.user)

		if(user)
			return user.toJSON()
		else
			return null
			
	}catch(err){
		
		
		return null
	}
})

module.exports = checkSession