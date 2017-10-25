import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { UserDataProvider } from '../user-data/user-data';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DashboardDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DashboardDataProvider {
data:any;
  constructor(public http: Http,public userData:UserDataProvider) {
    
  }
  load():any{
    if(this.data){
      return Observable.of(this.data);
    }
    else {
      return this.http.get('assets/data/data.json')
        .map(this.processData, this);
    }
  }
  processData(data: any) {
    this.data = data.json();
  }

}
