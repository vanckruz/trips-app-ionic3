import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivitisServices } from '../../providers/activities.services';

@Component({
  selector: 'page-post-trip',
  templateUrl: 'post-trip.html',
    providers: [ActivitisServices]

})
export class PostTripPage {

  activities: Array<any>;

  tripData: any =  {
			destination: "",
      difficulty: "",
      duration: "",
			activities: []
		};

  constructor(public navCtrl: NavController, public navParams: NavParams, public activitiesProvider: ActivitisServices) {
    		this.getActivities();
  }

	getActivities(){
		this.activitiesProvider.get()
		.subscribe( (data) => {
			this.activities = data;
			console.log(this.activities)
	    });
	}  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostTripPage');
  }

}
