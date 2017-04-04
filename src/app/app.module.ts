import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { AngularFireModule } from 'angularfire2'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

var config = {
  apiKey: "AIzaSyB71crIgGSyauxUesA81uLyx0ontD-dMbA",
  authDomain: "species-game.firebaseapp.com",
  databaseURL: "https://species-game.firebaseio.com",
  storageBucket: "species-game.appspot.com",
  messagingSenderId: "642596607410"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    Page1,
    Page2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
