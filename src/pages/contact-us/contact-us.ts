import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactServices } from '../../providers/contact.services';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
  providers: [ContactServices]
})
export class ContactUsPage {

  form: FormGroup;
  userEmail: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public contact: ContactServices,
    private toastCtrl: ToastController,
    public storage: Storage
  ){

    this.storage.get('user').then((user) => {
      this.userEmail = JSON.parse(user).emailUser;    
    });

    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required
      ])],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

	toastMessage(message): any {
	  let toast = this.toastCtrl.create({
	    message: message,
	    duration: 3000,
	    position: 'top'
	  });

	  return toast;
	}  

  sendMessage(name, email, subject, message){
    if(this.form.valid){
      this.contact.message(name, email, subject, message).subscribe( (data) => {
        console.log(data) ;
        if(data.status === 200){
					this.toastMessage("Message sent succesfully").present();
          this.form.reset();
        }
      });
    }
  }

}
