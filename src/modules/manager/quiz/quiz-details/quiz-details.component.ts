import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QUIZ_SERVICE } from '../../../../constants/injection.constant';
import { IQuizService } from '../../../services/quiz/quiz.interface';
import { MasterDetailComponent } from '../../master-detail/master-detail.component';
import { QuizMasterDto } from '../../../../models/quiz/quiz-master-dto.model';
@Component({
  selector: 'app-quiz-details',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css'
})
export class QuizDetailsComponent extends MasterDetailComponent<QuizMasterDto> implements OnChanges {

  constructor(@Inject(QUIZ_SERVICE) private quizService: IQuizService) { super() }

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
    if (this.isEdit && this.selectedItem) {
      this.form.patchValue(this.selectedItem);
    }
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    if (this.isEdit && this.selectedItem) {
      this.quizService.update(this.selectedItem.id, data).subscribe((result: QuizMasterDto) => {
        if (result) {
          console.log('Update success!');
        }
        this.cancel.emit();
      });
    } else {
      this.quizService.create(data).subscribe((result: QuizMasterDto) => {
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
