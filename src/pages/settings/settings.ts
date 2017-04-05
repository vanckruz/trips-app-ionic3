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
import { TermsOfUse } from '../terms-of-use/terms-of-use';
import { PrivacyPolicy } from '../privacy-policy/privacy-policy';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {
    
  constructor(
    private app: App, 
    public navCtrl: NavController,
    public storage:Storage, 
    public loading:LoadingController
  ){

  }

  goToTermsOfUse(){
    this.navCtrl.push(TermsOfUse);  	
  }

  goToPrivacyPolicy(){
    this.navCtrl.push(PrivacyPolicy);  	
  }

  sendEmail(){
   window.open('mailto:info@ridj-it.com');
  }
  
}
