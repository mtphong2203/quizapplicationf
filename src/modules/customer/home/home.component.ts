import { Component } from '@angular/core';
import { QuizComponent } from "../../common/quiz/quiz.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public quizzes: any[] = [
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

  public homeQuiz: string = './assets/images/quiz-bg-01.jpeg'

}
