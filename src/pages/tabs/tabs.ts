import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { PosttaskPage } from '../posttask/posttask';
import { MessagesPage } from '../messages/messages';
import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PosttaskPage;
  tab3Root: any = SearchPage;
  tab4Root:any=MessagesPage;
  mySelectedIndex: number;
  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}