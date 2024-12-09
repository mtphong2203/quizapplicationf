import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ROLE_SERVICE } from '../../../../constants/injection.constant';
import { IRoleService } from '../../../services/role/role.interface';

@Component({
  selector: 'app-role-details',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './role-details.component.html',
  styleUrl: './role-details.component.css'
})
export class RoleDetailsComponent implements OnInit, OnChanges {

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input('selectedItem') selectedItem: any;
  @Input('isEdit') isEdit: any;

  public form!: FormGroup;

  public faCancel: IconDefinition = faCancel;
  public faSave: IconDefinition = faSave;

  constructor(@Inject(ROLE_SERVICE) private roleService: IRoleService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
    this.patchValue();
  }
  ngOnInit(): void {
  }

  private patchValue(): void {
    if (this.isEdit) {
      this.form.patchValue(this.selectedItem);
    }
  }



  private createForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(255)),
      active: new FormControl(true)
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const data = this.form.value;
    if (this.isEdit) {
      this.roleService.update(this.selectedItem.id, data).subscribe((result) => {
        if (result) {
          console.log(data);
        }
        this.cancel.emit();
      })

    } else {
      this.roleService.create(data).subscribe((result) => {
        if (result) {
          console.log(data);
        }
        this.cancel.emit();
      });
    }
  }

  public onCancel(): void {
    this.cancel.emit();
  }

}
