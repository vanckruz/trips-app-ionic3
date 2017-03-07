import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { DetailTrip } from '../detail-trip/detail-trip';
import { SearchTrips } from '../search-trips/search-trips';
import { FilterTrips } from '../filter-trips/filter-trips';
import { SearchServices } from '../../providers/search.services';
import { ActivitisServices } from '../../providers/activities.services';
import { TripServices } from '../../providers/trips.services';


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
  providers: [
		SearchServices, 
		ActivitisServices,
		TripServices
	]
})
export class Trips {

	activities: Array<any>;
	trips: any;

	constructor(
		public navCtrl: NavController, 
		public popoverCtrl: PopoverController, 
		public modalCtrl: ModalController, 
		public viewCtrl: ViewController, 
		public loading: LoadingController,
		public search: SearchServices,
		public activitiesProvider: ActivitisServices, 
		public tripServices: TripServices
	){
		//this.getTrips();
		this.trips = this.tripServices.getTrips();
		this.getActivities();
	}

	getActivities(){
		this.activitiesProvider.get()
		.subscribe( (data) => {
			this.activities = data;
		});
	}

	getTrips(){
		//this.tripServices.getTrips().subscribe( data => this.trips = data );
	}

	detailTrip(trip){
		this.navCtrl.push(DetailTrip,{
			"trip":trip
		});
	}

	refreshTrips(){
		this.trips = this.tripServices.getTrips();
	}

	backTohome(){
    	this.navCtrl.setRoot(LoginPage);
	}

	showSearchModal(ev)
	{	   
	    let modal = this.modalCtrl.create(SearchTrips,{params: this.activities});
	    modal.present();
	    modal.onDidDismiss((data: any) => {

			if(data.run) 
			{
				console.log("data desde la vista disparadora. ",data);
				let loading = this.loading.create({
					content: 'Please wait...'
				});    
				
				loading.present().then(() => {      
					this.search.search(data).subscribe( (data) => {
						loading.dismiss().then( () => {
							console.log(data);
							this.trips = data;                    
						} );
					});
				});//Loading   			
			}

	    });	  	      
	}	
	
	showFiltersModal(ev)
	{	   
	    let modal = this.modalCtrl.create(FilterTrips,{params: this.activities});
	    modal.present();
	    modal.onDidDismiss((data: any) => {

			if(data.run) 
			{
				let loading = this.loading.create({
					content: 'Please wait...'
				});   

				loading.present().then( () => {      
					loading.dismiss().then( () => {
						console.log(data);		        	
						this.filterTrips(data);
					});				
				});//Loading   			
			}

	    });	 
	}

	filterTrips(filterObject = null){

		if(this.trips.lenght === 0 || filterObject === null ){
			return this.trips;
		}

		if(filterObject !== null){
							
			let filter = this.trips.filter(
				item => {						
					if(item.genderDriver.toLowerCase() === filterObject.gender.toLowerCase()){
						return true;
					}
					return false;
				});

			return this.trips = filter;				
		}		
	}	

}

