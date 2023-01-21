const {curry} = require("../libs/functional.lib");
const stripe = require('stripe')('sk_test_51MLEjIFrqrjB7aAH5lpopVvwofpoQLoyYu3IA6w9Gug2sB0N0epDisiN3gAUhFAyCEqr0c2oNfRdVWVLwiL4du6w00GpKvMdxa');

const payWithStripe = async(root, args, request)=>{
	
	try{

		if(!request?.session?.user) return null

		const {input} = args
		const items = input.map(e=>{
			const [price,quantity] = e
			return {
				price,
				quantity
			}
		})
		const session = await stripe.checkout.sessions.create({
		    line_items:items ,
		    mode: 'payment',
		    success_url: `http://localhost:5173/app/#home`,
		    cancel_url: `http://localhost:5173/app/#home`
		});
		request.session.order=input
		console.log(request.session)
		return {url:session.url}
			
	}catch(err){
		
		console.log(err)
		
		return null
	}
}

module.exports = payWithStripe