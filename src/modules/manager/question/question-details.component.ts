import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
  public apiURL: string = 'http://localhost:8080/api/manager/questions';

  // icon
  public faCancel: IconDefinition = faCancel;
  public faSave: IconDefinition = faSave;

  constructor(private http: HttpClient) { }
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
      this.http.put(`${this.apiURL}/${this.selectedItem.id}`, data).subscribe((result) => {
        if (result) {
          console.log('Update success!');
        }
        this.cancel.emit();
      });
    } else {
      this.http.post(this.apiURL, data).subscribe((result) => {
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
