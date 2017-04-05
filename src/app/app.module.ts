import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { Footer } from '../pages/footer/footer';
import { Profile } from '../pages/profile/profile';
import { SearchTrips } from '../pages/search-trips/search-trips';
import { FilterTrips } from '../pages/filter-trips/filter-trips';
import { Trips } from '../pages/trips/trips';
import { DetailTrip } from '../pages/detail-trip/detail-trip';
import { AcceptTermsPage } from '../pages/accept-terms/accept-terms';
import { DetailsConfirmPage } from '../pages/details-confirm/details-confirm';
import { MyTrips } from '../pages/my-trips/my-trips';
import { Privacy } from '../pages/privacy/privacy';
import { Settings } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { PostTripPage } from '../pages/post-trip/post-trip';
import { NewCarPage } from '../pages/new-car/new-car';
import { UserInfoPage } from '../pages/user-info/user-info';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutUsPage } from '../pages/about-us/about-us';

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
    AcceptTermsPage,
    DetailsConfirmPage,
    MyTrips,
    Privacy,
    Settings,
    SignupPage,
    PostTripPage,
    NewCarPage,
    UserInfoPage,
    ContactUsPage,
    AboutUsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    AcceptTermsPage,
    DetailsConfirmPage,
    MyTrips,
    Privacy,
    Settings,
    SignupPage,
    PostTripPage,
    NewCarPage,
    UserInfoPage,
    ContactUsPage,
    AboutUsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
