import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailTrip } from '../detail-trip/detail-trip';

/*
  Generated class for the Trips page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class Trips {

	public trips: any = [
	 {
	   "id": 10,
	   "carType": "Sedan",
	   "musicInCar": true,
	   "driverFirstName": "Rik",
	   "driverLastName": "Ganguly",
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
	 }
	];

	constructor(public navCtrl: NavController) {}

	ionViewDidLoad() {
		console.log('Hello Trips Page');
	}

	detailTrip(trip){
		this.navCtrl.push(DetailTrip,{
			"trip":trip
		});
	}

}
