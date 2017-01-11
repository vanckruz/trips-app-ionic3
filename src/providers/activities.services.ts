import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class ActivitisServices{

	static get parameters() {
	   return [[Http]];
	}

	constructor(private http:Http) {

	}

	get(){
	    return this.http.get('http://p.ridj-it.com/app/activities').map(res => res.json());
	}

}
