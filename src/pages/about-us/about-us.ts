import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, FabContainer } from 'ionic-angular';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html'
})
export class AboutUsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

  openSocial(network: string, fab: FabContainer) {
   window.open(network);
   fab.close();
  }  

}
