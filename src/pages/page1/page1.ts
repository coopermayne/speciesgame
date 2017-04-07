import { Component } from '@angular/core';

import { ToastController } from 'ionic-angular';


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
  imgIndex = 0;
  img;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1');
  }

  constructor(public navCtrl: NavController, private af: AngularFire, private quizData: QuizData, public toastCtrl: ToastController) {
    this.setUpQuestion();
  }

  showNextImg() {
    if (this.imgIndex == this.question.images.length-1) {
      this.imgIndex = 0
    }else {
      this.imgIndex++
    }
    this.img = this.question.images[this.imgIndex].url
  }

  clickAnswer(correct) {
    if(correct){
      var message = "correct"
    } else {
      var message = "incorrect"
    }

    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();

    setTimeout(()=>{ this.setUpQuestion() }, 2000)

  }

  setUpQuestion() {
    this.quizData.getData().subscribe( question => {
      this.question = question
      this.imgIndex = Math.floor(Math.random()*question.images.length)
      this.img = question.images[this.imgIndex].url
    });
  }
}
