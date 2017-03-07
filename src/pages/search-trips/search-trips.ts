import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

interface Search<T>{
	destination: string;
	start: string;
	end: string;
	run?: boolean;
	activities: Array<T>;
}

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTrips {
  
	search: Search<string> = {
		destination: "",
		start: "",
		end: "",
		activities: []
	}
	activities: Array<string>;
	show : boolean = false;

 	constructor(
		 public navCtrl: NavController, 
		 public viewCtrl: ViewController, 
		 public navParams: NavParams
	){
		this.activities = navParams.get("params");		
 	}	

	showResults(){
		this.show = true;
	}

	hideResults(){
		this.show = false;
	}

	setDestine(goTo){
		this.search.destination = goTo.destination;
		console.log("destino: ",this.search.destination);
		this.show = false;		
	}

	dismiss(run=false){
		this.search.run = run ? true : false;
		this.viewCtrl.dismiss(this.search);
	}
	
}
