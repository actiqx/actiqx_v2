import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserOptions } from '../../interfaces/user-option';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { Response } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  res:any;
  constructor(public navCtrl: NavController, public userData: UserDataProvider) {
  }
  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      debugger;
  this.res=this.userData.login(this.login)
    
     
      this.navCtrl.push(TabsPage);
    }
  }
  onSignup() {
    this.navCtrl.push(SignupPage);
  }

}
