console.time("App start")

require('dotenv').config()

const app = require("express")()
const dbConnection = require("./database/config")

// ******* presenters *********

const createUser = require("./presenters/createUser");
const checkSession = require("./presenters/checkSession")
const loginPresenter = require("./presenters/login")
const logoutPresenter = require("./presenters/logout")
const createPlate = require("./presenters/createPlate");
const getPlates = require("./presenters/getPlates");
const payWithStripe = require("./presenters/payWithStripe");
const addToCart = require("./presenters/addToCart");
const deleteItemInCart = require("./presenters/deleteItemInCart");
const addAddress = require("./presenters/addAddress");
const deleteAddress = require("./presenters/deleteAddress");
const selectAddress = require("./presenters/selectAddress");
const processPayment = require("./presenters/processPayment");
const createDiscount = require("./presenters/createDiscount");
const getDiscounts = require("./presenters/getDiscounts");


// ***** Models ******

const User = require("./models/User");
const Plate = require("./models/Plate");
const Order = require("./models/Order");
const Discount = require("./models/Discount");

// ******* middlewares ********

const {makeExecutableSchema} = require("@graphql-tools/schema")
const {graphqlHTTP} = require("express-graphql") 
const jsonMiddleware = require("express").json()
const session = require("express-session")
const filesMiddleware = require("express").static("./public")
const corsMiddleware = require("cors")({
 	origin :"http://localhost:5173",
 	credentials:true
})
const userAgent = require("express-useragent").express()

const checkSessionMiddleware = 
	require("./middlewares/checksession.js")

const sessionStore = 
	require('connect-mongodb-session')(session);

const store = new sessionStore({
  uri: process.env.MONGODB_CNN,
  collection: 'mySessions'
});

store.on('error', function(error) {
  console.log(error);
});

const sessions = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly:true },
  store: store,
})

const graphqlMiddleware = graphqlHTTP((req,res)=>{   
	  
	return {
	  
	  schema: makeExecutableSchema({
	    	
	    typeDefs: require("fs").readFileSync(  			
	  		"./schema.graphql", 
	  		'utf-8'
	  	), 
		    	
	    resolvers: graphqlPresenters
		  
	  }),
	    
	  rootValue:graphqlPresenters,
	    
	  graphiql:isDev
	}
});

// ***************

const isDev = process.env.NODE_ENV !== 'production'

const f = Object.freeze

const globalMiddlewaresList = f([
	
	sessions,

	corsMiddleware,
  	
	jsonMiddleware,
  	
	filesMiddleware,

	userAgent,

	checkSessionMiddleware

]);

const graphqlPresenters = {
    Query:{
    	getOwnData:checkSession(User),
    	getPlates:getPlates(Plate),
    	logout:logoutPresenter,
    	processPayment:processPayment({
    			Order,
    			User
    		}),
    	getDiscounts:getDiscounts(Discount)
    },
    Mutation:{
    	createUser:createUser(User),
    	login:loginPresenter(User),
    	createPlate:createPlate(Plate),
    	pay:payWithStripe({
    			Order,
    			User
    		}),
    	addToCart:addToCart(User),
    	deleteItemInCart:deleteItemInCart(User),
    	addAddress:addAddress(User),
    	deleteAddress:deleteAddress(User),
    	selectAddress:selectAddress(User),
    	createDiscount:createDiscount({
    		Plate,
    		Discount
    	})
   	}
}

const specificMiddlewareList = f([
	{
  		url:"/api",
  		middleware:graphqlMiddleware
  	}
]);

globalMiddlewaresList.forEach((middleware)=>{
	app.use(middleware)
})

specificMiddlewareList.forEach((object)=>{
	
	const {url,middleware} = object
	
	app.use(url,middleware)

})

app.listen(8080,()=>{
	console.log("Server running on port "+8080)
})

dbConnection()

console.timeEnd("App start")
