const logout = (async(root, arg, request)=>{
	try{

		request.session.destroy(()=>{
			request.session = null
		})

		return {message:"Session destroyied"}
	}catch(err){
		const errorName = `${err}`.slice(7,)
		throw new GraphQLError(errorName)
	}
})

module.exports=logout