import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Actiqx } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { PosttaskPage } from '../pages/posttask/posttask';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';
import { UserDataProvider } from '../providers/user-data/user-data';
import { DashboardDataProvider } from '../providers/dashboard-data/dashboard-data';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { SignupPage } from '../pages/signup/signup';
import { SupportPage } from '../pages/support/support';
import { IonicStorageModule } from '@ionic/storage';
import { AppDataProvider } from '../providers/app-data/app-data';
import { AutocompletePage } from '../pages/autocomplete/autocomplete';


@NgModule({
  declarations: [
    Actiqx,
    HomePage,
    TabsPage,
    MessagesPage,
    PosttaskPage,
    SearchPage,
    LoginPage,
    AccountPage,
    SignupPage,
    SupportPage,
    AutocompletePage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(Actiqx,{},{
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Actiqx,
    HomePage,
    TabsPage,
    MessagesPage,
    PosttaskPage,
    SearchPage,
    LoginPage,
    AccountPage,
    SignupPage,
    SupportPage,
    AutocompletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserDataProvider,
    DashboardDataProvider,
    InAppBrowser,
   
    AppDataProvider
  ]
})
export class AppModule { }
