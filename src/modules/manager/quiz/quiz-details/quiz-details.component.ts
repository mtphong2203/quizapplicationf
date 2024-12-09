import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { QUIZ_SERVICE } from '../../../../constants/injection.constant';
import { IQuizService } from '../../../services/quiz/quiz.interface';
@Component({
  selector: 'app-quiz-details',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css'
})
export class QuizDetailsComponent implements OnChanges {

  @Input('selectedItem') selectedItem: any;
  @Input('isEdit') isEdit: any;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  public form!: FormGroup;

  // icon
  public faCancel: IconDefinition = faCancel;
  public faSave: IconDefinition = faSave;

  constructor(@Inject(QUIZ_SERVICE) private quizService: IQuizService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
    this.patchValue();
  }

  private createForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(255)),
      duration: new FormControl(null, Validators.required),
      active: new FormControl(true),
    });
  }

  private patchValue(): void {
    if (this.isEdit) {
      this.form.patchValue(this.selectedItem);
    }
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    if (this.isEdit) {
      this.quizService.update(this.selectedItem.id, data).subscribe((result) => {
        if (result) {
          console.log('Update success!');
        }
        this.cancel.emit();
      });
    } else {
      this.quizService.create(data).subscribe((result) => {
        if (result) {
          console.log('Create success!');
        }
        this.cancel.emit();
      });
    }

  }

  public onCancel(): void {
    this.cancel.emit();
  }

}
