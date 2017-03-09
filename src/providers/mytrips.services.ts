import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable()
export class MyTripsServices{
	static get parameters() {
	   return [[Http]];
	}


	constructor(private http:Http) {

	}

	getMyTrips(parameters){
	    return this.http.get(config.routes.myTrips(parameters)).map(res => res.json());
	}

}
