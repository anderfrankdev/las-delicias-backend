const getDevice = require("../libs/getDevice")
const {curry} = require("../libs/functional.lib")

const loginPresenter = curry(async(User,root, args, request)=>{
	try{
		const {email,password} = args.input

		const user = await User.findOne({email})

		if(!user) 
			throw new Error("There's no user with that email")
		//@ts-ignore
		if(user.password != password)
			throw new Error("Invalid password")

		request.session.user = user.id
		request.session.device = getDevice(request.useragent)

		return user
	}catch(err){
		const errorName = `${err}`.slice(7,)
		throw new Error(errorName)
	}
})

module.exports=loginPresenter