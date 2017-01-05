import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-detail-trip',
  templateUrl: 'detail-trip.html'
})
export class DetailTrip {

	public trip: any;

	constructor(public navCtrl: NavController,	public params: NavParams, public storage: Storage){
		this.trip = this.params.get("trip");
	}

	ionViewDidLoad(){
		console.log('Hello DetailTrip Page');
	}

	letRide(){

	}
}
