import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class MyTripsServices{
	static get parameters() {
	   return [[Http]];
	}


	constructor(private http:Http) {

	}

	getMyTrips(idUser){
	    return this.http.get('http://qa.ridj-it.com/ridjit-web/app/API/myTrips/'+idUser).map(res => res.json());
	}

}
