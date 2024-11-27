import { Component } from '@angular/core';
import { QuizComponent } from "../../common/quiz/quiz.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public quizzes: any[] = [];
  public homeQuiz: string = './assets/images/quiz-bg-01.jpeg'

  constructor(private _quizService: QuizService) {
    this.quizzes = this._quizService.getQuiz();
  }




}
