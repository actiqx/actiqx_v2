import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { SignUpOptions } from '../../interfaces/signup-option';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

  signup: SignUpOptions={ username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserDataProvider) {}

  ngOnInit(){
   
  }
  onSignup(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }
}
