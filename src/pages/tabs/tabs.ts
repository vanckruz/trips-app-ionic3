import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { IntroPage } from '../intro/intro';
import { LoginPage } from '../login/login';
import { Profile } from '../profile/profile';
import { SearchTrips } from '../search-trips/search-trips';
import { Trips } from '../trips/trips';
import { DetailTrip } from '../detail-trip/detail-trip';
import { MyTrips } from '../my-trips/my-trips';
import { Privacy } from '../privacy/privacy';
import { Settings } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //Tabs
  tab1: any = Trips;
  tab2: any = MyTrips;
  tab3: any = Profile;
  tab4: any = Settings;

  //Parametros
  user: any;

  constructor(
    public navCtrl: NavController, 
    public params: NavParams, 
    public storage: Storage,
    public loading:LoadingController
    ) {
    
    this.storage.set('user', JSON.stringify( this.params.get("user") ) ).then(() => {
      console.log('Name has been set');
    });    

  }

}
