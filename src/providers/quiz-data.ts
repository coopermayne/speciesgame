import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class QuizData {

  constructor(public http: Http) {
  }

  getData(){
    return this.http.get("https://peaceful-plains-81836.herokuapp.com/question/random").map( res => res.json() )  
    //return this.http.get("http://localhost:3000/question/random").map( res => res.json() )  
  }
}
