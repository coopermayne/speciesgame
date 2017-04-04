import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

//import { QuizDataService } from '.'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {

  username: string = "";

  constructor(public navCtrl: NavController, private af: AngularFire) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1');
  }
}
