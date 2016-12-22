import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class LoginServices{
	static get parameters() {
	   return [[Http]];
	}

	constructor(private http:Http) {
		
	}

	Auth(email: any, password: any):Observable<any>{
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		let options = new RequestOptions({
			headers: headers
		});
		// TODO: Encode the values using encodeURIComponent().
		let body = 'email=' + email + '&password=' + password;

		let user = this.http.post('http://qa.ridj-it.com/ridjit-web/app/API/login', body, options);

		return user;
	}

}
