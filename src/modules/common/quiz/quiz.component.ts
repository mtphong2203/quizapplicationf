import { Component, Input } from '@angular/core';
import { FormatterPipe } from '../../pipes/formatter.pipe';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormatterPipe],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  @Input() public quizItem: any = {}
}
