import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, } from '@angular/http';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { IonicStorageModule } from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Data} from '../providers/data';
import {Reddit} from '../providers/reddit';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { UserPage } from '../pages/user/user';
import { HttpClientModule } from '@angular/common/http';
import { UserSettingsProvider } from '../providers/user-settings/user-settings';

@NgModule({
  declarations: [MyApp, HomePage, SettingsPage, UserPage],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp), IonicStorageModule.forRoot(), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, SettingsPage, UserPage],
  providers: [
    UserSettingsProvider,
    IonicStorageModule,
    Data,
    Keyboard,
    Reddit,
    StatusBar,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
