import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTrips {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SearchTrips Page');
  }

}
