import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { Footer } from '../pages/footer/footer';
import { Profile } from '../pages/profile/profile';
import { SearchTrips } from '../pages/search-trips/search-trips';
import { FilterTrips } from '../pages/filter-trips/filter-trips';
import { Trips } from '../pages/trips/trips';
import { DetailTrip } from '../pages/detail-trip/detail-trip';
import { MyTrips } from '../pages/my-trips/my-trips';
import { Privacy } from '../pages/privacy/privacy';
import { Settings } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { PostTripPage } from '../pages/post-trip/post-trip';
import { NewCarPage } from '../pages/new-car/new-car';
import { UserInfoPage } from '../pages/user-info/user-info';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    LoginPage,
    Footer,
    Profile,
    Trips,
    SearchTrips,
    FilterTrips,
    DetailTrip,
    MyTrips,
    Privacy,
    Settings,
    SignupPage,
    PostTripPage,
    NewCarPage,
    UserInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    LoginPage,
    Footer,
    Profile,
    Trips,  
    SearchTrips,
    FilterTrips,
    DetailTrip,
    MyTrips,
    Privacy,
    Settings,
    SignupPage,
    PostTripPage,
    NewCarPage,
    UserInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage]
})
export class AppModule {}
