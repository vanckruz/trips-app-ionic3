import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { NewCarPage } from '../new-car/new-car';
import { ActivitisServices } from '../../providers/activities.services';

@Component({
  selector: 'page-post-trip',
  templateUrl: 'post-trip.html',
  providers: [ActivitisServices]
})
export class PostTripPage {

    @ViewChild('postTripSlider') postTripSlider: any;
    activities: Array<any>;
    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;

    tripData: any =  {
    		destination: "",
        difficulty: "",
        duration: "",
    		activities: []
    };

    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public modalCtrl: ModalController,
      public formBuilder: FormBuilder,
      public activitiesProvider: ActivitisServices
    ){
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

    showNewCarModal(ev)
    {
       
        let modal = this.modalCtrl.create(NewCarPage);
        modal.present();

        modal.onDidDismiss((data: any) => {
          console.log("data desde la vista disparadora. ",data);
        });   
    }    

    save()
    {

    }

}
