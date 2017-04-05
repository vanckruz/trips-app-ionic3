import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

import { DetailsConfirmPage } from '../details-confirm/details-confirm';

@Component({
  selector: 'page-accept-terms',
  templateUrl: 'accept-terms.html'
})
export class AcceptTermsPage {

  trip: any;
  accept: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ){
    	this.trip = this.navParams.get("trip");
  }

  ionViewDidLoad() {
    console.log(this.trip);
  }

	dismiss(){
		this.viewCtrl.dismiss();
	}

  confirmTrip(trip){
    this.navCtrl.push(DetailsConfirmPage,{
			"trip": trip
		});
  }

}
