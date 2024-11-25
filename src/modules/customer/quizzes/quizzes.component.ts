import { Component, Input } from '@angular/core';
import { QuizComponent } from "../../common/quiz/quiz.component";

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [QuizComponent],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {

  @Input() public quizzes: any = {};

}
