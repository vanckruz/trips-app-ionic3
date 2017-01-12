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
    Settings
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
    Settings
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage]
})
export class AppModule {}
