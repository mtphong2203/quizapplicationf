import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { USER_SERVICE } from '../../../constants/injection.constant';
import { IUserService } from '../../services/user/user.interface';

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

  public faCancel: IconDefinition = faCancel;
  public faSave: IconDefinition = faSave;

  constructor(@Inject(USER_SERVICE) private userService: IUserService) { }

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
      this.userService.update(this.selectedItem.id, data).subscribe((result) => {
        if (result) {
          console.log('Update success!');
        }
        this.cancel.emit();
      });
    } else {
      this.userService.create(data).subscribe((result) => {
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
