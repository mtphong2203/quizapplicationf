import { Component, Input, OnInit } from '@angular/core';
import { FormatterPipe } from '../../pipes/formatter.pipe';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormatterPipe],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  @Input() public quizItem: any = {}

  public onSubmit(event: Event): void {
    // not reload page when submit form
    event.preventDefault();
    // log data
    console.log(this.quizItem.image);
    console.log(this.quizItem.title);
    console.log(this.quizItem.time);
    console.log(this.quizItem.description);
  }

}
