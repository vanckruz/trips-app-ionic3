import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { App, NavController, LoadingController } from 'ionic-angular';

import { IntroPage } from '../intro/intro';
import { LoginPage } from '../login/login';
import { Footer } from '../footer/footer';
import { Profile } from '../profile/profile';
import { SearchTrips } from '../search-trips/search-trips';
import { Trips } from '../trips/trips';
import { DetailTrip } from '../detail-trip/detail-trip';
import { MyTrips } from '../my-trips/my-trips';
import { Privacy } from '../privacy/privacy';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {
    
  constructor(private app: App, public navCtrl: NavController,public storage:Storage, public loading:LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello Settings Page');
  }

  goToPrivacy(){
    this.navCtrl.push(Privacy);  	
  }

  popPrivacy(){
    this.navCtrl.pop(Privacy);  	
  }

  logout(){
    this.storage.remove('user');
    let loading = this.loading.create({
      content: 'Please wait...'
    });    
    loading.present().then(() => {      
      loading.dismiss().then( () => {
          this.navCtrl.setRoot(LoginPage);
      } );
    });
  }  
}
