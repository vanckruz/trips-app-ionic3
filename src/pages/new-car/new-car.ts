import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-new-car',
  templateUrl: 'new-car.html'
})
export class NewCarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCarPage');
  }

	private dismiss() 
	{
		this.viewCtrl.dismiss();
	}  

}
