import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Storage } from '@ionic/storage';

import { NewCarPage } from '../new-car/new-car';
import { UserInfoPage } from '../user-info/user-info';

@Component({
  selector: 'page-details-confirm',
  templateUrl: 'details-confirm.html',
	providers: [PayPal]
})
export class DetailsConfirmPage {

	trip: any;
	show: boolean;
  	promo: string;
	tripType: any;

	parameters: any = {
		tripType: "rider",
		extraCost: [],
		cars: [],
		total: 0		
	}	

	user: any;

	constructor(
		public navCtrl: NavController,
		public params: NavParams,
		public storage: Storage,
		public modalCtrl: ModalController,
		private payPal: PayPal
	){
		this.trip = this.params.get("trip");

		this.storage.get('user').then( user => {
			this.show = (user) ? true : false;   
			this.user = JSON.parse(user); 
		});		
	}

	newCar(){
		this.navCtrl.push(NewCarPage);		
	}

	sumExtraprice(cost){
		
		if( this.parameters.extraCost.indexOf(cost) == -1 ){
			
			this.parameters.extraCost.push(cost);

		}else{
			
			this.parameters.extraCost.splice(this.parameters.extraCost.indexOf(cost), 1);

		} 

		console.log( this.parameters.extraCost );

		let total = 0;
		for(let i = 0, len = this.parameters.extraCost.length; i < len; i++) {
			total += this.parameters.extraCost[i].priceAmount;
		}	

		console.log(this.trip.groupTripInfo.priceAsDriver);

		return this.parameters.total = total;
	}

	updateTotal(check){
		this.parameters.extraCost.push(check);
	}

	letTrip(trip){
		this.payPal.init({
			PayPalEnvironmentProduction: "access_token$sandbox$v3s48nj697rqm75b$5411d39b4f3031dca319b2a28299f245",
			PayPalEnvironmentSandbox: "access_token$sandbox$v3s48nj697rqm75b$5411d39b4f3031dca319b2a28299f245"
		}).then(() => {
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({

			})).then(() => {
				let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
				this.payPal.renderSinglePaymentUI(payment).then(() => {
					// Successfully paid

				}, () => {
					// Error or render dialog closed without being successful
				});
			}, () => {
				// Error in configuration
			});
		}, () => {
			// Error in initialization, maybe PayPal isn't supported or something else
		});
	}

	goUserInfo(user){
		this.navCtrl.push(UserInfoPage, {
			user: user
		});
	}

}
