import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { QUESTION_SERVICE } from '../../../constants/injection.constant';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.css'
})
export class QuestionDetailsComponent implements OnChanges {

  @Input('selectedItem') selectedItem: any;
  @Input('isEdit') isEdit: any;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  public form!: FormGroup;

  // icon
  public faCancel: IconDefinition = faCancel;
  public faSave: IconDefinition = faSave;

  constructor(@Inject(QUESTION_SERVICE) private questionService: QuestionService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
    this.patchValue();
  }

  private patchValue(): void {
    if (this.isEdit) {
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
    if (this.isEdit) {
      this.questionService.update(this.selectedItem.id, data).subscribe((result) => {
        if (result) {
          console.log('Update success!');
        }
        this.cancel.emit();
      });
    } else {
      this.questionService.create(data).subscribe((result) => {
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
