import { Component, ViewChild } from '@angular/core';
import { NavController, List } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   // the list is a child of the schedule page
  // @ViewChild('scheduleList') gets a reference to the list
  // with the variable #scheduleList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('dashboardList', { read: List }) dashboardList: List;
  queryText='';
  constructor(public navCtrl: NavController) {

  }

}
