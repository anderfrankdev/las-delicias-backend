console.time("App start")

require('dotenv').config()

const app = require("express")()

const dbConnection = require("./database/config")

// ******* presenters *********

const createUser = require("./presenters/createUser");

// ************

// ******* middlewares ********

const {makeExecutableSchema} = require("@graphql-tools/schema")
const {graphqlHTTP} = require("express-graphql") 

const session = require("express-session")

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

	require("cors")({
	   	origin :"http://localhost:5173",
	   	credentials:true
	  }),
  	
	require("express").json(),
  	
	require("express").static("./public"),

	require("express-useragent").express(),

	require("./middlewares/checksession.middleware.js")

]);

const graphqlPresenters = {
    Query:{
    },
    Mutation:{
    	createUser
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
