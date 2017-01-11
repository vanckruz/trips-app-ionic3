import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-options-search-trips',
  templateUrl: 'options-search-trips.html'
})
export class OptionsSearchTrips {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsSearchTripsPage');
  }

}
