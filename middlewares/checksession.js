const getDevice = require("../libs/getDevice.js") 

const checkSession=(req,res,next)=>{
	let isSame = true;



 	const session = req?.session?.device
 		? Object.values(req.session.device)
 		: false


 	const device = Object.values(getDevice(req.useragent))

	if(session)
	 	session.forEach((e,i)=>{
	 		if(e != device[i]) isSame = false
	 	})

	if(!isSame) {
		req.session.destroy()
		console.log("Session destroyied")
	}

	return next()
}

module.exports = checkSession
 