import { Component, group } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-filter-trips',
  templateUrl: 'filter-trips.html'
})
export class FilterTrips {

	filter: any = {
		start: new Date().toISOString(),
		end: new Date().toISOString(),
		groupTrip: false,
		gender: "anyone",
		activities: []
	};

	activities: Array<any>;

	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) 
	{
		this.activities = navParams.get("params");		
	}

	dismiss(run=false) 
	{
		this.filter.run = run ? true : false;

		this.viewCtrl.dismiss(this.filter);
	}	

}
