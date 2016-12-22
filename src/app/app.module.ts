import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { MyApp } from './app.component';
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
import { UpcomingDriver } from '../pages/upcoming-driver/upcoming-driver';
import { UpcomingRider } from '../pages/upcoming-rider/upcoming-rider';
import { CompletedDriver } from '../pages/completed-driver/completed-driver';
import { CompletedRider } from '../pages/completed-rider/completed-rider';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    LoginPage,
    Footer,
    Profile,
    SearchTrips,
    Trips,
    DetailTrip,
    MyTrips,
    Privacy,
    Settings,
    UpcomingDriver,
    UpcomingRider,
    CompletedDriver,
    CompletedRider,
    //Initial pages:
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
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
    SearchTrips,
    Trips,
    DetailTrip,
    MyTrips,
    Privacy,
    Settings,
    UpcomingDriver,
    UpcomingRider,
    CompletedDriver,
    CompletedRider,
    //Initial pages:
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage]
})
export class AppModule {}
