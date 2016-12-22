import { Injectable } from '@angular/core';  
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class ProfileServices{
	static get parameters() {
	   return [[Http]];
	}


	constructor(private http:Http) {

	}

	getProfile(token, idUsuario){

		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		let options = new RequestOptions({
			headers: headers
		});
		// TODO: Encode the values using encodeURIComponent().
		let body = 'token=' + token + '&idUsuario=' + idUsuario;

		// let user = this.http.post('http://qa.ridj-it.com/ridjit-web/app/API/profileUser', body, options).map(res => res.json());		

	    return this.http.post('http://qa.ridj-it.com/ridjit-web/app/API/profileUser', body, options).map(res => res.json());
	}

}
