import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnChanges {

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input('selectedItem') selectedItem: any;
  @Input('isEdit') isEdit: any;

  public form!: FormGroup;
  public apiURL: string = 'http://localhost:8080/api/manager/users';

  public faCancel: IconDefinition = faCancel;
  public faSave: IconDefinition = faSave;

  constructor(private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
    this.patchValue();
  }

  private createForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.maxLength(30)),
      lastName: new FormControl('', Validators.maxLength(30)),
      username: new FormControl('', [Validators.maxLength(30), Validators.required]),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      thumbnailUrl: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
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
      })
    }
  }

  public onCancel(): void {
    this.cancel.emit();
  }

}
