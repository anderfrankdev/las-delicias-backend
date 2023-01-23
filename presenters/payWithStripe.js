const {curry} = require("../libs/functional.lib");
const stripe = require('stripe')('sk_test_51MLEjIFrqrjB7aAH5lpopVvwofpoQLoyYu3IA6w9Gug2sB0N0epDisiN3gAUhFAyCEqr0c2oNfRdVWVLwiL4du6w00GpKvMdxa');

const payWithStripe = curry(async(User,root, args, request)=>{
	
	if(!request?.session?.user) 
		throw new Error("There's no session")
	
	const id = request.session.user
	const {input} = args
	const items = input.map(e=>{
		const [price,quantity] = e
		return {
			price,
			quantity
		}
	})
	const [user,session] = await 
		Promise.all([
			User.findById(id),
			stripe.checkout.sessions.create({
			    line_items:items ,
			    mode: 'payment',
			    success_url: `http://localhost:5173/app/#home`,
			    cancel_url: `http://localhost:5173/app/#home`
			})
		]) 

	if (!user)
		throw new Error("The user does not exists")
	else if (!user.addresses[0])
		throw new Error("The user has no address saved")
	
	else if (!user.addresses.filter(e=>e.main===true)[0])
		throw new Error("The user has not" 
			+"stablished a main address")


	
	const order = {
		products:input,
		payment:session.id
	}
	request.session.order = order
	
	return {url:session.url}
			
})

module.exports = payWithStripe