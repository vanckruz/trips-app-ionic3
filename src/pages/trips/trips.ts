import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular';
import { DetailTrip } from '../detail-trip/detail-trip';
import { SearchTrips } from '../search-trips/search-trips';
import { SearchServices } from '../../providers/search.services';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
  providers: [SearchServices]
})
export class Trips {

	public trips: any = [
	 {
	   "id": 10,
	   "carType": "Sedan",
	   "musicInCar": true,
	   "driverFirstName": "Rik",
	   "driverLastName": "Ganguly",
	   "genderDriver": "MALE",
	   "driverPic": "https://s3.amazonaws.com/ridj-it-pics-p/pic_users/rik_ganguly_gmail_com2811481565943521280.jpg",
	   "cost": "$20",
	   "activitiesTypes": [
	     {
	       "name": "Skiing",
	       "urlPic": "http://icons.ridj-it.com/skiing-snowboarding.png"
	     },
	     {
	     	"name": "fishing",
	     	"urlPic": "http://icons.ridj-it.com/fishing.png"
	     }
	   ],
	   "destination": "McIntyre Ski Area",
	   "destinationCity": "Hillsborough County", 
	   "destinationState": "New Hampshire",
	   "smokingFriendly": false,
	   "activityDescription": "SNOW TUBING",
	   "locationsPickup": "Assembly (Orange Line, Somerville/Assembly Square)",
	   "totalSeatsAvailable": 4,
	   "duration": 6,
	   "dateOfTrip": "Saturday, 01/07/2017",
	   "pickupTime": "Saturday, 01/07/2017 - 11:15 AM",
	   "dropOffTime": "Saturday, 01/07/2017 - 7:15 PM",
	   "propertiesOfTrip": [
	     {
	       "nameProperty": "Ski Rack:",
	       "valueProperty": "No"
	     }
	   ],
	   "ridersOfTrip": [
			{
				"firstNameRider": "Antonio",
				"lastNameRider": "Iacarino",
				"urlPicRider": "http://images.ridj-it.com/pic_users/ari_iaccarino_gmail_com1983340727459394560.jpg"
			},					
			{
				"firstNameRider": "Rik",
				"lastNameRider": "Ganguly",
				"urlPicRider": "https://s3.amazonaws.com/ridj-it-pics-p/pic_users/rik_ganguly_gmail_com2811481565943521280.jpg"
			}			
		]
	 },
	 {
	   "id": 11,
	   "carType": "Ferrari",
	   "musicInCar": true,
	   "driverFirstName": "Hugo",
	   "driverLastName": "Chavez",
	   "genderDriver": "MALE",
	   "driverPic": "http://www.pgr.gob.ve/images/efemerides/20131007_CHVEZ_I.jpg",
	   "cost": "$20000",
	   "activitiesTypes": [
	     {
	       "name": "Expropriate",
	       "urlPic": "http://icons.ridj-it.com/skiing-snowboarding.png"
	     },
	     {
	     	"name": "insult",
	     	"urlPic": "http://icons.ridj-it.com/fishing.png"
	     }
	   ],
	   "destination": "Caracas, miraflores",
	   "destinationCity": "Caracas", 
	   "destinationState": "D.C",
	   "smokingFriendly": false,
	   "activityDescription": "Expropriate and insult",
	   "locationsPickup": "Assembly (Orange Line, Somerville/Assembly Square)",
	   "totalSeatsAvailable": 4,
	   "duration": 6,
	   "dateOfTrip": "Saturday, 01/10/2018",
	   "pickupTime": "Saturday, 01/10/2018 - 11:15 AM",
	   "dropOffTime": "Saturday, 01/10/2018 - 7:15 PM",
	   "propertiesOfTrip": [
	     {
	       "nameProperty": "Ski Rack:",
	       "valueProperty": "No"
	     }
	   ],
	   "ridersOfTrip": [
			{
				"firstNameRider": "Antonio",
				"lastNameRider": "Iacarino",
				"urlPicRider": "http://images.ridj-it.com/pic_users/ari_iaccarino_gmail_com1983340727459394560.jpg"
			},					
			{
				"firstNameRider": "Rik",
				"lastNameRider": "Ganguly",
				"urlPicRider": "https://s3.amazonaws.com/ridj-it-pics-p/pic_users/rik_ganguly_gmail_com2811481565943521280.jpg"
			}			
		]
	 },
	 {
	   "id": 12,
	   "carType": "Lamborgini",
	   "musicInCar": true,
	   "driverFirstName": "Jennifer",
	   "driverLastName": "Lawrence",
	   "genderDriver": "FEMALE",
	   "driverPic": "http://img.huffingtonpost.com/asset/,scalefit_950_800_noupscale/55f18df31400002e002e549c.jpeg",
	   "cost": "$100000",
	   "activitiesTypes": [
	     {
	       "name": "Dance",
	       "urlPic": "http://icons.ridj-it.com/skiing-snowboarding.png"
	     }
	   ],
	   "destination": "hollywood",
	   "destinationCity": "California", 
	   "destinationState": "California",
	   "smokingFriendly": false,
	   "activityDescription": "Dance and Take a walk",
	   "locationsPickup": "Assembly (Orange Line, Somerville/Assembly Square)",
	   "totalSeatsAvailable": 4,
	   "duration": 6,
	   "dateOfTrip": "Saturday, 10/01/2017",
	   "pickupTime": "Saturday, 10/01/2017 - 11:15 AM",
	   "dropOffTime": "Saturday, 01/02/2017 - 7:15 PM",
	   "propertiesOfTrip": [
	     {
	       "nameProperty": "Ski Rack:",
	       "valueProperty": "No"
	     }
	   ],
	   "ridersOfTrip": [
			{
				"firstNameRider": "Antonio",
				"lastNameRider": "Iacarino",
				"urlPicRider": "http://images.ridj-it.com/pic_users/ari_iaccarino_gmail_com1983340727459394560.jpg"
			},					
			{
				"firstNameRider": "Rik",
				"lastNameRider": "Ganguly",
				"urlPicRider": "https://s3.amazonaws.com/ridj-it-pics-p/pic_users/rik_ganguly_gmail_com2811481565943521280.jpg"
			}			
		]
	 },
	 	 	 {
	   "id": 13,
	   "carType": "Ferrari",
	   "musicInCar": true,
	   "driverFirstName": "Shailene",
	   "driverLastName": "Woodley",
	   "genderDriver": "FEMALE",
	   "driverPic": "http://static.t13.cl/images/sizes/1200x675/1427809321_1440shailene-woodley.jpg",
	   "cost": "$20000",
	   "activitiesTypes": [
	     {
	       "name": "Driving",
	       "urlPic": "http://icons.ridj-it.com/skiing-snowboarding.png"
	     }
	   ],
	   "destination": "Chicago",
	   "destinationCity": "Chicago", 
	   "destinationState": "Chicago",
	   "smokingFriendly": false,
	   "activityDescription": "driving",
	   "locationsPickup": "Assembly (Orange Line, Somerville/Assembly Square)",
	   "totalSeatsAvailable": 4,
	   "duration": 6,
	   "dateOfTrip": "Sunday, 01/10/2019",
	   "pickupTime": "Sunday, 01/10/2019 - 11:15 AM",
	   "dropOffTime": "Sunday, 01/10/2019 - 7:15 PM",
	   "propertiesOfTrip": [
	     {
	       "nameProperty": "Ski Rack:",
	       "valueProperty": "No"
	     }
	   ],
	   "ridersOfTrip": [
			{
				"firstNameRider": "Jhonny",
				"lastNameRider": "Vasquez",
				"urlPicRider": "http://jhonnyvasquez.hol.es/public/assets/img/yo.png"
			}		
		]
	 },
	 {
	   "id": 12,
	   "carType": "Lamborgini",
	   "musicInCar": true,
	   "driverFirstName": "Harley",
	   "driverLastName": "Queen",
	   "genderDriver": "FEMALE",
	   "driverPic": "http://3.bp.blogspot.com/-pivj70cjckY/Vo15GbmXqtI/AAAAAAAAjrk/2UTOtK-KUzM/s640/1390098418480.jpg",
	   "cost": "$100000",
	   "activitiesTypes": [
	     {
	       "name": "Dance",
	       "urlPic": "http://icons.ridj-it.com/skiing-snowboarding.png"
	     }
	   ],
	   "destination": "hollywood",
	   "destinationCity": "California", 
	   "destinationState": "California",
	   "smokingFriendly": false,
	   "activityDescription": "Dance and Take a walk",
	   "locationsPickup": "Assembly (Orange Line, Somerville/Assembly Square)",
	   "totalSeatsAvailable": 4,
	   "duration": 6,
	   "dateOfTrip": "Saturday, 10/01/2017",
	   "pickupTime": "Saturday, 10/01/2017 - 11:15 AM",
	   "dropOffTime": "Saturday, 01/02/2017 - 7:15 PM",
	   "propertiesOfTrip": [
	     {
	       "nameProperty": "Ski Rack:",
	       "valueProperty": "No"
	     }
	   ],
	   "ridersOfTrip": [
			{
				"firstNameRider": "Jhonny",
				"lastNameRider": "Vasquez",
				"urlPicRider": "http://jhonnyvasquez.hol.es/public/assets/img/yo.png"
			}		
		]
	 }	 
	];

	constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public modalCtrl: ModalController, public viewCtrl: ViewController, public search: SearchServices, public loading: LoadingController) {

	}

	ionViewDidLoad() 
	{
		console.log('Hello Trips Page');
	}

	detailTrip(trip)
	{
		this.navCtrl.push(DetailTrip,{
			"trip":trip
		});
	}

	showSearchModal(ev)
	{
	   
	    let modal = this.modalCtrl.create(SearchTrips);
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
	                            // this.trips = data;                    
	                      } );
	                });
		        });//Loading   			
			}


	    });	  
	      
	}	
}
