import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { Posttask } from '../../interfaces/posttask';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the PosttaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-posttask',
  templateUrl: 'posttask.html',
})
export class PosttaskPage {
  posttask:Posttask={info:"",categories:"",address:{place:'',latitude:'',longitude:''},myDate:''};
  submitted=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ModalCtrl:ModalController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosttaskPage');
  }
  showAddressModal () {
    let modal = this.ModalCtrl.create(AutocompletePage);
    
    modal.onDidDismiss(data => {
      this.posttask.address.place = data;
    });
    modal.present();
  }
  onPosttask(form:NgForm){
    this.submitted=true;
    if(form.valid){
      
    }


  }

}
