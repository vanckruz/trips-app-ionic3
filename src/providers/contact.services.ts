import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable()
export class ContactServices{
	static get parameters() {
	   return [[Http]];
	}

	constructor(private http:Http) {
		
	}

	message(name: string, email: string, subject: string, message: string):Observable<any>{
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		let options = new RequestOptions({
			headers: headers
		});

		let body = 'name=' + name + '&email=' + email+'&subject='+ subject+ '&message='+message;

		return this.http.post(config.routes.contact(), body, options);
	}

}
