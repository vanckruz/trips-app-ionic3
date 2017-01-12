import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

interface Search{
	destination: string;
	start: string;
	end: string;
	run?: boolean;
	activities: Array<any>;
}

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTrips {
  
	search: Search = {
		destination: "",
	start: "",
	end: "",
	activities: []
	}
	activities: Array<any>;


 	constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams)
 	{
		this.activities = navParams.get("params");		
 	}

	ionViewDidLoad() 
	{
		console.log('Hello SearchTrips Page');
	}	

	private dismiss(run=false) 
	{
		this.search.run = run ? true : false;

		this.viewCtrl.dismiss(this.search);
	}
}
