import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { StatusBar, Splashscreen } from 'ionic-native';

import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { Footer } from '../pages/footer/footer';
import { Profile } from '../pages/profile/profile';
import { SearchTrips } from '../pages/search-trips/search-trips';
import { Trips } from '../pages/trips/trips';
import { DetailTrip } from '../pages/detail-trip/detail-trip';
import { MyTrips } from '../pages/my-trips/my-trips';
import { Privacy } from '../pages/privacy/privacy';
import { Settings } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html',
  providers: []
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  introPage:any = IntroPage;
  loginPage:any = LoginPage;
  perfil:any = Profile;
  searchTrips:any = SearchTrips;
  footerPage:any = Footer;

  constructor(platform: Platform, private storage: Storage, private toastCtrl: ToastController, private loading: LoadingController) {

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.checkLogin();
    });

  }

  checkLogin(){
    this.storage.get('user').then((user) => {
      this.rootPage = (user) ? Footer : LoginPage;
    });      
  }

  goToIntro(){
    this.nav.push(IntroPage);
  }

  logout(){
    this.storage.remove('user');
    let loading = this.loading.create({
      content: 'Please wait...'
    });    
    loading.present().then(() => {      
      loading.dismiss().then( () => {
        this.nav.setRoot(LoginPage);
      } );
    });
  }   

}
