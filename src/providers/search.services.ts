import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class SearchServices{

	static get parameters() {
	   return [[Http]];
	}

	constructor(private http:Http) {

	}

	search(data){
	    return this.http.post('http://p.ridj-it.com/app/search',data).map(res => res.json());
	}

}
