import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html'
})
export class Privacy {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Privacy Page');
  }

}
