import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Privacy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
