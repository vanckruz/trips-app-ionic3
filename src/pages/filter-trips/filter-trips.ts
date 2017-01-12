import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-filter-trips',
  templateUrl: 'filter-trips.html'
})
export class FilterTrips {

	filter: any = {
		start: "",
		end: "",
		gender: "anyone",
		activities: []
	};
	activities: Array<any>;

	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) 
	{
		this.activities = navParams.get("params");		
	}

	ionViewDidLoad() 
	{

	}

	activityList(item, state)
	{
		if(state._checked)
		{
			this.filter.activities.push(item.cod);
		}
		else
		{
			let index = this.filter.activities.indexOf(item.cod);
			this.filter.activities.splice(index, 1);
		}
	}

	dismiss(run=false) 
	{
		this.filter.run = run ? true : false;

		this.viewCtrl.dismiss(this.filter);
	}	

}
