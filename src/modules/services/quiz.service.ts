import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuiz() {
    return [
      {
        image: './assets/images/capitals.jpeg',
        title: 'Capitals of Country',
        time: 15,
        description: 'Test your knowledge of country capitals'
      },
      {
        image: './assets/images/inventions.png',
        title: 'Capitals of Country',
        time: 90,
        description: 'Test your knowledge of country capitals'
      },
      {
        image: './assets/images/map.jpeg',
        title: 'Capitals of Country',
        time: 5690,
        description: 'Test your knowledge of country capitals'
      }
    ]
  }
}
