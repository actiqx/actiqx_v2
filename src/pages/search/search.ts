import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, List, ModalController, ToastController, App } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild('searchList', { read: List }) searchList: List;
  queryText = '';
  segment = 'all';
  groups: any = [];
  constructor(public navCtrl: NavController,
    public app: App,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public searchData: SearchProvider
  ) {
  }


  ionViewDidLoad() {
  this.app.setTitle('Search');
  this.updateSearch();
  }
  ionViewWillEnter(){
   this.searchData.load().subscribe((data:any)=>{
     if(data&&data.info){
       this.groups=data;
       
     }
   })
  }
  updateSearch() {
    this.searchList&& this.searchList.closeSlidingItems();
    this.searchData.getSearchList()
  }

}
