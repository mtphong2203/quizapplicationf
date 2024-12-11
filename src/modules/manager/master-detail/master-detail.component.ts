import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCancel, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-master-detail',
  standalone: true,
  imports: [],
  templateUrl: './master-detail.component.html',
  styleUrl: './master-detail.component.css'
})
export class MasterDetailComponent<T> {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input('selectedItem') selectedItem: T | null | undefined;
  @Input('isEdit') isEdit: boolean = true;

  public form!: FormGroup;

  public faCancel: IconDefinition = faCancel;
  public faSave: IconDefinition = faSave;
}
