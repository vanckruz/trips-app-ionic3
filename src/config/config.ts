export var config = {
		routes:{
			/*Get Routes*/
			//Routes with tokens (Protected)
			myTrips: function(parameters){
				return `http://qa.ridj-it.com/app/api/mobile/V1/user/${parameters.id}/mytrips?token=${parameters.token}`
			},
			profile: function(parameters){
				return `http://qa.ridj-it.com/app/api/mobile/V1/user/${parameters.id}/profile?token=${parameters.token}`
			},
			//Untokens (Routes publics)
			activities: function(){
				return `http://qa.ridj-it.com/app/api/mobile/V1/activities`
			},
			trips: function(){
				return `http://qa.ridj-it.com/app/api/mobile/V1/trips`
			},
			search: function(){
				return `http://qa.ridj-it.com/app/search`
			},
			/*Post Routes*/
			login: function(){
				return `http://qa.ridj-it.com/app/api/mobile/V1/login`
			},
			singup: function(){
				return `http://qa.ridj-it.com/app/api/mobile/V1/signup`
			}
		}
	}

