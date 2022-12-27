require('dotenv').config()

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const dbConnection = async()=>{
	try{

		await mongoose.connect( process.env.MONGODB_CNN )
		
		console.log("Data base runnig")

	}catch(err){
		console.log(err)
		//throw new Error("Connection error")
	}
}

module.exports= dbConnection 
