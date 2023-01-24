const {curry} = require("../libs/functional.lib");
const stripe = require('stripe')('sk_test_51MLEjIFrqrjB7aAH5lpopVvwofpoQLoyYu3IA6w9Gug2sB0N0epDisiN3gAUhFAyCEqr0c2oNfRdVWVLwiL4du6w00GpKvMdxa');

const processPayment = curry(async(Models,root, args, request)=>{
	
	const {User,Order} = Models

	try{

		if(!request?.session?.user) 
			return {
				message:"There's no session",
				successful:false
			}
		
		if(!request?.session?.order) 
			return {
				message:"There's no order",
				successful:false
			}

		console.log(request.session)
		const {paymentId} = request?.session?.order

		const session = await stripe
			.checkout.sessions.retrieve(paymentId);

		if (session.payment_status==="unpaid") {
			return {
				message:"Order has not been paid yet",
				successful:false
			}
		}else if (session.payment_status==="paid") {

			const user = await User.findById(request.session.user)
			
			const mainAddress = user?.addresses
				?.filter(e=>e.main===true)[0]

			if (!mainAddress) return {
				message:"User has no address",
				successful:false
			}

			const input  =  {
				user:request.session.user,
				...request?.session?.order,
				address: mainAddress 
			}

			let order = new Order(input)

			await order.save()
	    	
	    	const cart = JSON.stringify(user.cart),
	    		paid = JSON.stringify(input.products)

	    	if (cart===paid) {
	    		const length = user.cart.length
	    		user.cart.splice(0,length)
	    		user.save()
	    	}
	    	request.session.order=null;
	    	return {
				message:"Order has been processed",
				successful:true,
				order:{
					id:order._id,
					amount_items:input.products.length,
					amount_paid:(session.amount_total/100)
						.toFixed(2)
				},
				address:mainAddress
			}

		}

			
	}catch(err){
		
		console.log(err)
		return null
	}
})

module.exports = processPayment