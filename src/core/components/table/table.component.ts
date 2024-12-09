import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input('dataApi') dataApi: any;
  @Input('columns') columns: any;

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() create: EventEmitter<any> = new EventEmitter<any>();

  public faPlus: IconDefinition = faPlus;
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrash;


  public onEdit(event: any): void {
    this.edit.emit(event);
  }

  public onDelete(event: any): void {
    this.delete.emit(event);
  }

  public onCreate(): void {
    this.create.emit();
  }

}
