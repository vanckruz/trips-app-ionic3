import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyTripsServices } from '../../providers/mytrips.services';

@Component({
  selector: 'page-my-trips',
  templateUrl: 'my-trips.html',
  providers: [MyTripsServices]
})
export class MyTrips {

	trips: any;
    	
	constructor(public navCtrl: NavController,private myTrips: MyTripsServices, public storage: Storage, public params: NavParams) {}

	ionViewDidLoad() {
	console.log('Hello MyTrips Page');
	}

	ionViewWillEnter() 
	{ 
		this.storage.get('user').then(
		(user) => {
			this.myTrips.getMyTrips(JSON.parse(user).idUser).subscribe(data => this.trips = data);		
		});
	}

}
