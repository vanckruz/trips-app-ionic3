import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-detail-trip',
  templateUrl: 'detail-trip.html'
})
export class DetailTrip {

	trip: any;
	show: boolean;

	constructor(
		public navCtrl: NavController,
		public params: NavParams,
		public storage: Storage
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

	letRide(){

	}
}
