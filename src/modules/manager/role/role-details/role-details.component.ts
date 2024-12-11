import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ROLE_SERVICE } from '../../../../constants/injection.constant';
import { IRoleService } from '../../../services/role/role.interface';
import { MasterDetailComponent } from '../../master-detail/master-detail.component';
import { RoleMasterDto } from '../../../../models/role/role-master-dto.model';

@Component({
  selector: 'app-role-details',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './role-details.component.html',
  styleUrl: './role-details.component.css'
})
export class RoleDetailsComponent extends MasterDetailComponent<RoleMasterDto> implements OnChanges {

  constructor(@Inject(ROLE_SERVICE) private roleService: IRoleService) { super() }
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
    if (this.isEdit && this.selectedItem) {
      this.roleService.update(this.selectedItem.id, data).subscribe((result: RoleMasterDto) => {
        if (result) {
          console.log(data);
        }
        this.cancel.emit();
      })

    } else {
      this.roleService.create(data).subscribe((result: RoleMasterDto) => {
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
