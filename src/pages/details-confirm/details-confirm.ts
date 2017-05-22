import { Footer } from '../footer/footer';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
//import { PayPal, PayPalPayment, PayPalConfiguration } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { NewCarPage } from '../new-car/new-car';
import { UserInfoPage } from '../user-info/user-info';
import { OrderSuccessServices } from './../../providers/order-success.services';
import { PreOrderServices } from './../../providers/pre-order.services';
import { OrderErrorServices } from './../../providers/order-error';

@Component({
  selector: 'page-details-confirm',
  templateUrl: 'details-confirm.html',
  providers: [
	  PreOrderServices,
	  OrderSuccessServices,
	  OrderErrorServices
  ]
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
		private payPal: PayPal,
		private pre: PreOrderServices,
		private orderSuccess: OrderSuccessServices,
		private orderError: OrderErrorServices,
		private toastCtrl: ToastController
	){
		this.trip = this.params.get("trip");

		this.storage.get('user').then( user => {
			this.show = (user) ? true : false;   
			this.user = JSON.parse(user); 
		});		
		console.log(PayPal);
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

	letTrip(trip, promo){

		if(trip.singleTrip){
			trip.total = trip.singleTripInfo.costSingleTrip;
		}else if(trip.groupTrip){
			if(this.parameters.tripType == 'driver'){
				trip.total = trip.groupTripInfo.priceAsRider + this.parameters.total;
			}else{
				trip.total = trip.groupTripInfo.priceAsDriver;
			}
		}

		trip.promoCode = promo;
		trip.user = this.user;
		
		console.log(trip);

		this.payPal.init({
			//Make a app in developer.paypal.com and Place the customer id down:
			PayPalEnvironmentProduction: "",
			PayPalEnvironmentSandbox: "Ac24nJXpgOZjeLy6GAC81D0eCcDnznQRgjo0hr7J1yJ-bKqUFobeVK7QPWMgvT7ALE34aHN2KmbUgrBa"
		}).then(() => {
			
			this.pre.pre(trip).subscribe( (data) => {

			});

			//Change PayPalEnvironmentProduction
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
			})).then(() => {

				let payment = new PayPalPayment(trip.total, 'USD', trip.activityDescription, 'Trip to '+trip.destination);
				this.payPal.renderSinglePaymentUI(payment).then(() => {
					// Successfully paid
					this.orderSuccess.success(payment).subscribe( (data) => {
						
					});

					this.storage.get('trips').then((tripsUser) => {
						if(tripsUser){
							this.storage.set('trips', JSON.parse(tripsUser).push(trip) ).then( () => {
								this.navCtrl.setRoot(Footer);				
							});
						}else{
							this.storage.set('trips', [trip] ).then( () => {
								this.navCtrl.setRoot(Footer);				
							});
							this.toastMessage("Have you joined the trip").present();
						}
					}); 

				}, () => {
					// Error or render dialog closed without being successful
					this.orderError.error(trip).subscribe( (data) => {
						
					});	

				});
			}, () => {
				// Error in configuration
					this.orderError.error(trip).subscribe( (data) => {
						
					});	
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

	toastMessage(message): any {
	  let toast = this.toastCtrl.create({
	    message: message,
	    duration: 3000,
	    position: 'top'
	  });

	  return toast;
	} 

}
