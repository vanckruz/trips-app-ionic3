import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { DetailTrip } from '../detail-trip/detail-trip';
import { SearchTrips } from '../search-trips/search-trips';
import { FilterTrips } from '../filter-trips/filter-trips';
import { SearchServices } from '../../providers/search.services';
import { ActivitisServices } from '../../providers/activities.services';
import { TripServices } from '../../providers/trips.services';
import { UserValidatorServices } from '../../providers/user.validator.services';

interface Comparable{
	gender: string;
	start?: string | number;
	end?: string | number;
	activities?: Array<string>;
}

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
	user: any;

	constructor(
		public navCtrl: NavController, 
		public popoverCtrl: PopoverController, 
		public modalCtrl: ModalController, 
		public viewCtrl: ViewController, 
		public loading: LoadingController,
		public search: SearchServices,
		public activitiesProvider: ActivitisServices, 
		public tripServices: TripServices,
		public storage: Storage
	){
		//this.trips = this.tripServices.getTrips();
		this.showBlockedItems();
		this.getTrips();
		this.getActivities();
	}

	getActivities(){
		this.activitiesProvider.get()
		.subscribe( (data) => {
			this.activities = data;
		});
	}

	getTrips(){
		let loading = this.loading.create({
			content: 'Please wait...'
		});    
		
		loading.present().then(() => {      
			this.tripServices.getTrips().subscribe( (data) => {
				loading.dismiss().then( () => {
					this.trips = data;                    
				} );
			});
		});//Loading   			
	}

	showBlockedItems(){
		this.storage.get('user').then((user) => {
		  this.user = user;
		});   
	}

	detailTrip(trip){
		this.navCtrl.push(DetailTrip,{
			"trip":trip
		});
	}

	refreshTrips(){
		this.getTrips();
		//this.trips = this.tripServices.getTrips();
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
							
			let filter = this.trips.filter( item => this.comparator(item, filterObject) );

			return this.trips = filter;				
		}		
	}	

	comparator(trip, objVerificator): boolean
	{
		if( objVerificator.start == "" && objVerificator.end == "" && objVerificator.groupTrip == false && objVerificator.gender == "anyone" && objVerificator.activities.length == 0 )
		{
			return true;
		}
		else if(Date.parse(objVerificator.start) <= Date.parse(trip.pickupTimeShortFormat) && Date.parse(objVerificator.end) >= Date.parse(trip.dropOffTimeShortFormat) ){

			if(objVerificator.groupTrip) {
				return true;

			}
				return false;
			// objVerificator.groupTrip == trip.groupTrip
			// (objVerificator.activities.length == 0 || objVerificator.activities.length > 0)
			//objVerificator.gender != trip. &&

		}	
		else
		{
			return false;
		}
	}

}

