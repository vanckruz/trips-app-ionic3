import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { UpcomingDriver } from '../upcoming-driver/upcoming-driver';
import { UpcomingRider } from '../upcoming-rider/upcoming-rider';
import { CompletedDriver } from '../completed-driver/completed-driver';
import { CompletedRider } from '../completed-rider/completed-rider';

import { MyTripsServices } from '../../providers/mytrips.services';

@Component({
  selector: 'page-my-trips',
  templateUrl: 'my-trips.html',
  providers: [MyTripsServices]
})
export class MyTrips {

	trips: any;
	upcoming_driver: any = UpcomingDriver;
	upcoming_rider:	any = UpcomingRider;
	completed_driver: any = CompletedDriver;
	completed_rider: any = CompletedRider;
    	
	constructor(public navCtrl: NavController,private myTrips: MyTripsServices, public storage: Storage, public params: NavParams) {}

	ionViewDidLoad() {
	console.log('Hello MyTrips Page');
	}

	ionViewWillEnter() 
	{ 
		this.storage.get('user').then(
		(user) => {
			this.myTrips.getMyTrips(JSON.parse(user).idUser).subscribe(data => this.trips = data);
			console.log( this.trips);			
		});
	}

}
