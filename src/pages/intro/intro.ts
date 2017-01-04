import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

	slides: Array<{image: string}>;

  constructor(public navCtrl: NavController) {
    this.slides = [
    	{image: "assets/slides/slide1.jpg"},
    	{image: "assets/slides/slide2.jpg"},
    	{image: "assets/slides/slide3.jpg"},
    	{image: "assets/slides/slide4.jpg"},
    	{image: "assets/slides/slide5.jpg"},
    	{image: "assets/slides/slide6.jpg"}
    ];
  }

  pop(){
    this.navCtrl.pop();
  }  

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }  
}
