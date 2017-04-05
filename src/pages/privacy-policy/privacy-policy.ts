import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TermsOfUse } from '../terms-of-use/terms-of-use';

@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html'
})
export class PrivacyPolicy {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToTermsOfUse(){
    this.navCtrl.push(TermsOfUse);  	
  }  

}
