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
	upcoming_trips: any = "upcoming_driver";
	completed_trips: any = "completed_driver";
    	
	constructor(public navCtrl: NavController,private myTrips: MyTripsServices, public storage: Storage, public params: NavParams, private loading: LoadingController){

	}

	ionViewDidLoad() {
		console.log('Hello MyTrips Page');
	}

	ionViewWillEnter() 
	{ 
        let loading = this.loading.create({
          content: 'Please wait...'
        });    
        loading.present().then(() => {      
            this.storage.get('user').then((user) => {
                this.myTrips.getMyTrips(JSON.parse(user).idUser).subscribe( (data) => {
                      loading.dismiss().then( () => {
                            this.trips = data;
                      } );
                });
            });
        });//Loading  		
	}

}
