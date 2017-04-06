import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { QuizData } from '../../providers/quiz-data'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [QuizData]
})

export class Page1 {

  username: string = "";
  question;

  constructor(public navCtrl: NavController, private af: AngularFire, private quizData: QuizData) {
    this.question = this.quizData.getData();
    console.log(this.question);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1');
  }

}
