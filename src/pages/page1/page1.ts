import { Component } from '@angular/core';

import { ToastController } from 'ionic-angular';


import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

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
  toast;
  buttonsDisabled:boolean = false;

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
    if ( !this.buttonsDisabled ){
      //first try
      console.log('first try')
      this.buttonsDisabled = !this.buttonsDisabled

      if(correct){
        var message = "correct";
        var toastClass = "correct";
        var duration = 2000;
      } else {
        var message = "incorrect - note correct answer";
        var toastClass = "incorrect";
        var duration = 0;  //0 means untill dismiss
      }

      this.toast = this.toastCtrl.create({
        message: message,
        duration: duration,
        position: "top",
        showCloseButton: true,
        cssClass: toastClass
      });

      this.toast.onDidDismiss(() => {
        this.setUpQuestion()
        this.buttonsDisabled = false
      });

      this.toast.present();

    } else {
      //second try
      console.log('second try')
      this.toast.dismiss();
    }

  }

  setUpQuestion() {
    this.quizData.getData().subscribe( question => {
      this.question = question
      this.imgIndex = Math.floor(Math.random()*question.images.length)
      this.img = question.images[this.imgIndex].url
    });
  }
}
