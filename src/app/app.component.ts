import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar, Splashscreen } from 'ionic-native';

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
import { PostTripPage } from '../pages/post-trip/post-trip';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { UserValidatorServices } from '../providers/user.validator.services';

@Component({
  templateUrl: 'app.html',
  providers: []
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  //rootPage:any = PostTripPage;
  introPage: any = IntroPage;
  loginPage: any = LoginPage;
  perfil: any = Profile;
  searchTrips: any = SearchTrips;
  footerPage: any = Footer;
  user: any;
  showPostTrip: boolean = true;  

  constructor(
    platform: Platform, 
    private storage: Storage,
    private toastCtrl: ToastController, 
    private loading: LoadingController,
    private statusBar: StatusBar,
    private splashscreen: SplashScreen
    ){
   
      platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashscreen.hide();
        this.checkLogin();
      });

  }

  checkLogin(){
    this.storage.get('user').then((user) => {
      this.rootPage = (user) ? Footer : LoginPage;
        if(user){
          this.user = JSON.parse(user);
          this.showPostTrip = this.user.isDriverRole;
        }
    });      
  }

  goToIntro(){
    this.nav.push(IntroPage);
  }

  goToPostTrip(){
   this.nav.push(PostTripPage); 
  }

  goToAboutUs(){
   this.nav.push(AboutUsPage); 
  }  

  goToContactUs(){
   this.nav.push(ContactUsPage); 
  }  

  openSocial(network: string) {
   window.open(network);
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
    });//Loading
  }   

}
