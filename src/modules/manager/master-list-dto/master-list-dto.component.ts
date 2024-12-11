import { Component } from '@angular/core';

@Component({
  selector: 'app-master-list-dto',
  standalone: true,
  imports: [],
  templateUrl: './master-list-dto.component.html',
  styleUrl: './master-list-dto.component.css'
})
export class MasterListDtoComponent<T> {
  public dataApi: T[] = [];

  public selectedItem: T | null | undefined;

  // boolean
  public isShow: boolean = false;
  public isEdit: boolean = false;
}
