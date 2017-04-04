import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string = "";j

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {}

  login() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    }).then(auth => {
      this.af.database.list('/users').push({
        uid: auth.uid,
        username: this.username
      }).then( newUser => {
        console.log("created new user");
      }, error => {
        console.log("error");
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
