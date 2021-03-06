import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFire } from 'angularfire2';

import { LoginPage } from '../pages/login/login';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any
  userInfo: any = {}
  sub2;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menuCtrl: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen, private af: AngularFire) {
    this.af.auth.subscribe(auth => {
      console.log("auth subscribe");
      if(!auth) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = Page1;
        this.sub2 = af.database.list('/users', {
          query: {
            orderByChild: 'uid',
            equalTo: auth.uid
          }
        }).subscribe(x => {
          if (!x.length) return;
          this.userInfo.username = x[0].username
          console.log(this.userInfo);
          this.sub2.unsubscribe();
        });
      }
    })


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Index', component: Page1 },
      { title: 'About', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.menuCtrl.close()
    this.af.auth.logout()
  }
}
