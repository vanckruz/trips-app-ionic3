import { Injectable } from '@angular/core';  
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { config } from '../config/config';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserValidatorServices{


	constructor(public storage: Storage){

	}

	static user(user){
		return user;
	}
}
