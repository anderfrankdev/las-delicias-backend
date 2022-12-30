const getDevice = require("../libs/getDevice")
const {curry} = require("../libs/functional.lib");

const createUser = curry(async(User,root, args, request)=>{
	
	const {input} = args;

	if (!input.name)
		throw new Error("Your name is required to signup");
	if (!input.email) 
		throw new Error("Your email is required to signup");
    if (!input.password)
		throw new Error("You need a password to create your account");

    try{
		const user = new User(input)

	    const created = await user.save()
	    request.session.user = user.id
		request.session.device = getDevice(request.useragent)
		console.log(request.session)
        return created.toJSON()
    }catch(err){
	    const field = Object.keys(err.keyPattern)[0]

        throw new Error("There is already a registered "+
		`user with this ${field}`)
	}
})

module.exports = createUser