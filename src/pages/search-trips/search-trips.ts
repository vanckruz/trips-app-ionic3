import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

interface Search{
	destination: string;
	start: string;
	end: string;
	run?: boolean;
}

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTrips {
  
  search: Search = {
  	destination: "",
    start: "",
    end: ""
  }

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

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
