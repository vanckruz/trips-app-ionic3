import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable()
export class ActivitisServices{

	static get parameters() {
	   return [[Http]];
	}

	constructor(private http:Http) {

	}

	get(){
	    return this.http.get(config.routes.activities()).map(res => res.json());
	}

}
