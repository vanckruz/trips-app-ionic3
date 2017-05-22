import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable()
export class OrderSuccessServices{
	static get parameters() {
	   return [[Http]];
	}

	constructor(private http:Http) {
		
	}

	success(data: any):Observable<any>{
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		let options = new RequestOptions({
			headers: headers
		});

		let body = 'data=' + data;

		return this.http.post(config.routes.ordersuccess(), body, options);
	}

}
