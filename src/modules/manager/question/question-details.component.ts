import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QUESTION_SERVICE } from '../../../constants/injection.constant';
import { QuestionService } from '../../services/question/question.service';
import { MasterDetailComponent } from '../master-detail/master-detail.component';
import { QuestionMasterDto } from '../../../models/question/question-master-dto.model';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.css'
})
export class QuestionDetailsComponent extends MasterDetailComponent<QuestionMasterDto> implements OnChanges {

  constructor(@Inject(QUESTION_SERVICE) private questionService: QuestionService) { super() }
  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
    this.patchValue();
  }

  private patchValue(): void {
    if (this.isEdit && this.selectedItem) {
      this.form.patchValue(this.selectedItem);
    }
  }

  private createForm(): void {
    this.form = new FormGroup({
      content: new FormControl('', Validators.required),
      type: new FormControl(null, Validators.required),
      active: new FormControl(true),
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    if (this.isEdit && this.selectedItem) {
      this.questionService.update(this.selectedItem.id, data).subscribe((result: QuestionMasterDto) => {
        if (result) {
          console.log('Update success!');
        }
        this.cancel.emit();
      });
    } else {
      this.questionService.create(data).subscribe((result: QuestionMasterDto) => {
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
