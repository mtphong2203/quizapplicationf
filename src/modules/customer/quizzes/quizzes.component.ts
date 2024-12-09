import { Component } from '@angular/core';
import { QuizComponent } from "../../common/quiz/quiz.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../services/common/quiz.service';

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [QuizComponent, CommonModule, FormsModule],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {

  public keyword: string = '';

  public quizzes: any[] = [];

  constructor(private _quizService: QuizService) {
    this.quizzes = this._quizService.getQuiz()
  }


}
