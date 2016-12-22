import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-upcoming-rider',
  templateUrl: 'upcoming-rider.html'
})
export class UpcomingRider {

	rider_trips: any;

	constructor(public navCtrl: NavController, public params: NavParams) 
	{
		this.run();
	}

	run(){
		this.rider_trips = this.params.data;
	}

	ionViewDidLoad() {
	console.log('Hello UpcomingRider Page');
	}

}
