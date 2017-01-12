import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable()
export class SearchServices{

	static get parameters() {
	   return [[Http]];
	}

	constructor(private http:Http) {

	}

	search(data){
	    return this.http.post(config.routes.search,data).map(res => res.json());
	}

}
