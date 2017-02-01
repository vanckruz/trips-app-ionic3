import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ActivitisServices } from '../../providers/activities.services';

@Component({
  selector: 'page-post-trip',
  templateUrl: 'post-trip.html',
    providers: [ActivitisServices]

})
export class PostTripPage {

    @ViewChild('postTripSlider') postTripSlider: any;
    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;
    activities: Array<any>;

    tripData: any =  {
    		destination: "",
        difficulty: "",
        duration: "",
    		activities: []
    	};

    constructor(public navCtrl: NavController, public navParams: NavParams, public activitiesProvider: ActivitisServices, public formBuilder: FormBuilder) {
      this.initForms();
      this.getActivities();
    }

    initForms(){
      this.slideOneForm = this.formBuilder.group({
          destination: ['', Validators.required],
          activities: ['', Validators.required],
          difficulty: ['', Validators.required],
          description: '',
          duration: ['', Validators.required]
      });   
    }

    next(){
        this.postTripSlider.slideNext();
    }
 
    prev(){
        this.postTripSlider.slidePrev();
    }

    getActivities(){
    	this.activitiesProvider.get()
    	.subscribe( (data) => {
    		this.activities = data;
    		console.log(this.activities)
        });
    }  

    ionViewDidLoad() {
      console.log('ionViewDidLoad PostTripPage');
    }

    save(){

    }

}
