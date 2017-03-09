import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { IntroPage } from '../intro/intro';
import { Footer } from '../footer/footer';
import { SignupPage } from '../signup/signup';
import { Trips } from '../trips/trips';
import { LoginServices } from '../../providers/login.services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginServices]
})
export class LoginPage{

	user:any;
	email:any;
	password:any;
	theming: Array<string> = ["1.jpg","2.jpg","3.jpg","4.jpg"];
	imgRandom: string = "assets/images/img_theming/1.jpg";

	constructor(
		public storage: Storage, 
		public navCtrl: NavController, 
		private toastCtrl: ToastController, 
		public loading:LoadingController, 
		private login: LoginServices
	){
		this.bgRamdon();
	}      	
	
	ramdonTheming(){
		return this.theming[Math.floor(Math.random() * this.theming.length)];
	}

	bgRamdon():void
	{
			// setInterval( () => this.imgRandom = "assets/images/img_theming/"+this.ramdonTheming(), 5000);
			this.imgRandom = "assets/images/img_theming/"+this.ramdonTheming();
	}	

	toastMessage(message): any {
	  let toast = this.toastCtrl.create({
	    message: message,
	    duration: 3000,
	    position: 'top'
	  });

	  return toast;
	}    

	getLogin(email, password){
	    let loading = this.loading.create({
	      content: 'Please wait...'
	    });    

	    loading.present().then(() => {      
			// this.login.Auth(email, password).subscribe(
			this.login.Auth("carlos.ruiz@tecnodas.com", "i89qBsvBt5bmlg0").subscribe(
			  data => {
			 
				if(data.json().messageException == null){
				
				      loading.dismiss().then( () => {
				        	this.navCtrl.setRoot(Footer, {
							    user: data.json()
								});				
				      });

				}else{
					this.toastMessage(data.json().messageException).present();
				}
			      
			  },
			  err => console.error(err),
			  () => console.log('Petición completed')
			);//Auth
		});//Loading			
	}	

	goToSingup(){
	    this.navCtrl.setRoot(SignupPage);	
	}

	goToIntro(){
		this.navCtrl.push(IntroPage);
	}

	exploretrips(){
	    this.navCtrl.setRoot(Trips);	
	}
	
}
