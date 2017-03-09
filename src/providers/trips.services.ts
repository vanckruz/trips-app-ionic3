import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable()
export class TripServices{
	static get parameters() {
	   return [[Http]];
	}


	constructor(private http:Http) {

	}

	getTrips(){
	   return this.http.get(config.routes.trips()).map(res => res.json());    
	}

}
