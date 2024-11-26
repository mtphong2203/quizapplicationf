import { Component } from '@angular/core';
import { QuizComponent } from "../../common/quiz/quiz.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [QuizComponent, CommonModule, FormsModule],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {

  public keyword: string = '';

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

}
