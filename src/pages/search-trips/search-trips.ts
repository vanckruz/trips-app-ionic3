import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTrips {
  
  search = {
  	destination: "",
    start: new Date().toISOString(),
    end: new Date().toISOString()
  }

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

	ionViewDidLoad() 
	{
		console.log('Hello SearchTrips Page');
	}

	dismiss() 
	{
		this.viewCtrl.dismiss(this.search);
	}
}
