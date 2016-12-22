import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProfileServices } from '../../providers/profile.services';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ProfileServices]
})
export class Profile {
    
    public user: any;
    public userProfile: any;
    public theming: Array<string> = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg"];
    public imgRandom: string = "assets/images/img_theming/2.jpg";

    constructor(public navCtrl: NavController,	public params: NavParams, public storage: Storage, private profile:ProfileServices,private loading: LoadingController)
    {
        this.bgRamdon();
    }

    ramdonTheming():any
    {
        return this.theming[Math.floor(Math.random() * this.theming.length)];
    }

    bgRamdon():void
    {
        setInterval( () => this.imgRandom = "assets/images/img_theming/"+this.ramdonTheming(), 5000);
    }

    ionViewWillEnter() 
    {
        this.storage.get('user').then((user) => {
            this.profile.getProfile("token",JSON.parse(user).idUser).subscribe( (data) => {
                let loading = this.loading.create({
                  content: 'Please wait...'
                });    
                loading.present().then(() => {      
                  loading.dismiss().then( () => {
                        this.userProfile = data;                    
                  } );
                });                
            });
        });
    }

    ionViewDidLoad() 
    {
        
    }
}