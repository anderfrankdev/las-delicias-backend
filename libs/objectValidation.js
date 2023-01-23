const validateUsername = (username) => {

	let valid = true;

	if (typeof username === "string"){
		
		const nameRegEx = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
		
		const isInvalid = !nameRegEx.test(username)
			|| username.length<1
		
		if(isInvalid){
			valid = false
		}

	}else{

 		valid = false
	}

	return valid
}

const validateHouseNumber = (house)=>{
	let valid = true;
	if (typeof house === "string"){
		
		const numberRegEx = /^\d*(\\d+)?$/;
		
		const isInvalid = !numberRegEx.test(house)
			|| house.length<1
		
		if(isInvalid){
			valid = false
		}

	
	}else{
		valid = false
	}

	return valid
}

const validateStreet = (street)=>{
	
	let valid = true;
	
	if (typeof street === "string"){
		
		const streetRegEx = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ0-9. ]+$/;

		
		const isInvalid = !streetRegEx.test(street)
			|| street.length<1
		
		if(isInvalid){
			valid = false
		}

	
	}else{
		valid = false
	}

	return valid

}

const validateCity = (city) => {

	let valid = true;
    
    if (typeof city === "string"){
        
        const cityRegEx = /^[A-Za-záéíóúÁÉÍÓÚ'°. ]+$/;
        
        const isInvalid = !cityRegEx.test(city)
            || city.length<1
        
        if(isInvalid){
            valid = false
        }

    
    }else{
        valid = false
    }

    return valid

}

const validateState = (state) => {

	let valid = true;
    
    if (typeof state === "string"){
        
        const stateRegEx = /^[A-Za-záéíóúÁÉÍÓÚ'° ]+$/;
        
        const isInvalid = !stateRegEx.test(state)
            || state.length<1
        
        if(isInvalid){
            valid = false
        }

    
    }else{
        valid = false
    }

    return valid

}

const validateZipcode = (zipcode)=>{
	let valid = true;
	if (typeof zipcode === "string"){
		
		const numberRegEx = /^\d*(\\d+)?$/;
		
		const isInvalid = !numberRegEx.test(zipcode)
			|| zipcode.length<5
		
		if(isInvalid){
			valid = false
		}

	
	}else{
		valid = false
	}

	return valid
}

const validateAddress = (address) => {

	const validation = {
		invalid:false,
		invalidFields:[] 
	}

	const {
		recipient,
		house,
		street,
		city,
		state,
		zipcode
	} = address

	if(!validateUsername(recipient)){
		validation.invalid = true
		validation.invalidFields.push("receiver name")
	}if(!validateHouseNumber(house)){
		validation.invalid = true
		validation.invalidFields.push("house number")
	}if(!validateStreet(street)){
		validation.invalid = true
		validation.invalidFields.push("street")
	}if(!validateCity(city)){
		validation.invalid = true
		validation.invalidFields.push("city")
	}if(!validateState(state)){
		validation.invalid = true
		validation.invalidFields.push("state")
	}if(!validateZipcode(zipcode)){
		validation.invalid = true
		validation.invalidFields.push("zipcode")
	}


	return validation
}

module.exports = {
	validateAddress
}
