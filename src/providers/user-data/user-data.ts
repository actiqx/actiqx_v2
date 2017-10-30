import { Injectable, Inject } from '@angular/core';

import 'rxjs/add/operator/map';
import { Events, List } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AppDataProvider } from '../app-data/app-data';
import { MY_CONFIG_TOKEN, ApplicationConfig } from '../../util/app-Config';
import { UserOptions, UserResponse } from '../../interfaces/user-option';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  public _token:any;
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(
   public appdata:AppDataProvider,
   @Inject(MY_CONFIG_TOKEN) private config:ApplicationConfig,
    public events: Events,
    public storage: Storage
  ) { }

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };
  login(login:UserOptions) {
    this.appdata.post(this.config.apiEndpoint+this.config.login,JSON.stringify(login) )

    .subscribe(res=>{
     this._token=res.json;
    })
    if(this._token!= null){
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUsername(login.username);
      this.events.publish('user:login');
    }
    
   return this._token;
    
    
  };

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

}
