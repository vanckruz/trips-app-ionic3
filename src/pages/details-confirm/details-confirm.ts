import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { UserInfoPage } from '../user-info/user-info';

@Component({
  selector: 'page-details-confirm',
  templateUrl: 'details-confirm.html'
})
export class DetailsConfirmPage {

	trip: any;
	show: boolean;
  promo: string;

	constructor(
		public navCtrl: NavController,
		public params: NavParams,
		public storage: Storage,
		public modalCtrl: ModalController
	){
		this.trip = this.params.get("trip");
		this.showBlockedItems();
	}

	ionViewDidLoad(){
		console.log('Hello DetailTrip Page');
	}

	showBlockedItems(){
		this.storage.get('user').then((user) => {
		  this.show = (user) ? true : false;
		});      
	}

	letRide(trip){

	}

	goUserInfo(user){
		this.navCtrl.push(UserInfoPage, {
			user: user
		});
	}

}
