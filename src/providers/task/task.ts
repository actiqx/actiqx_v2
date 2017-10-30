import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppDataProvider } from '../app-data/app-data';
import { MY_CONFIG_TOKEN, ApplicationConfig } from '../../util/app-Config';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {
  data:any;
  constructor(public appdata:AppDataProvider
         
  ) {
    
  }
//posttask(postParam){
   
   
     
    //this.appdata.post(this.config.apiEndpoint+this.config.posttask,postParam)
   // .subscribe((this.data)=>{
   // console.
   // })
  

}
