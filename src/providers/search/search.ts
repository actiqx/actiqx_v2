import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserDataProvider } from '../user-data/user-data';
import { Observable } from 'rxjs/Observable';
import { ApplicationConfig, MY_CONFIG_TOKEN } from '../../util/app-Config';
import { AppDataProvider } from '../app-data/app-data';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
data:any;
  constructor(
    public appdata:AppDataProvider,@Inject(MY_CONFIG_TOKEN) public config1: ApplicationConfig,public user:UserDataProvider) {
   
  }
  load():any{
    if(this.data){
      return Observable.of(this.data);
    }
    else{
      return this.appdata.get(this.config1.apiEndpoint+this.config1.search)
      .map(this.processData,this);
    }
  }
  processData(data:any){
    this.data=data.json;
  }
  getSearchList(){
    return this.load().map((data:any)=>{
      return data;
    })
  }

}
