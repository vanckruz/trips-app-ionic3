import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { IntroPage } from '../intro/intro';
import { LoginPage } from '../login/login';
import { Profile } from '../profile/profile';
import { SearchTrips } from '../search-trips/search-trips';
import { Trips } from '../trips/trips';
import { DetailTrip } from '../detail-trip/detail-trip';
import { MyTrips } from '../my-trips/my-trips';
import { Privacy } from '../privacy/privacy';
import { Settings } from '../settings/settings';
import { Storage } from '@ionic/storage';
import { ProfileServices } from '../../providers/profile.services';

@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html',
  providers: [ProfileServices]
})
export class Footer {

  //Tabss
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
    public loading:LoadingController,
    private profileService: ProfileServices
    ) {
    
    this.storage.set('user', JSON.stringify( this.params.get("user") ) ).then(() => {
      console.log('Name has been set');
    });    

  }  

  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
      console.log('User footer'+user);
    });    
  }

  presentLoadingDefault() {
    let loading = this.loading.create({
      content: 'Please wait...'
    });
    loading.present();
    setTimeout(() => { loading.dismiss(); }, 2000);
  }

  getTrips(){
    
  }

  getMyTrips(){
    
  }

  getProfile(){
    
    this.storage.get('user').then((user) => {

      this.presentLoadingDefault();
      this.profileService.getProfile("token", JSON.parse(user).idUser ).subscribe(
        (data) => {

          // this.navCtrl.setRoot(Profile,{profile:data});
          this.navCtrl.push(Profile,{profile:data});

      });      
    });    

  }

}
