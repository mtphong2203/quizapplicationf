import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faEdit, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RoleDetailsComponent } from "./role-details/role-details.component";
import { ROLE_SERVICE } from '../../../constants/injection.constant';
import { IRoleService } from '../../services/role/role.interface';
import { TableComponent } from "../../../core/components/table/table.component";

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RoleDetailsComponent, TableComponent],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent implements OnInit {
  public dataApi: any[] = [];

  public selectedItem: any;

  public columns: any[] = [
    { name: 'name', title: 'Name' },
    { name: 'description', title: 'Description' },
    { name: 'active', title: 'Active' },
  ]

  // boolean
  public isShow: boolean = false;
  public isEdit: boolean = false;

  constructor(@Inject(ROLE_SERVICE) private roleService: IRoleService) { }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    const param = {
      keyword: ''
    }
    this.roleService.search(param).subscribe((data: any) => {
      this.dataApi = data.data;
    });
  }

  public onCreate(): void {
    this.isShow = true;
    this.isEdit = false;
  }

  public onEdit(id: string): void {
    this.isShow = true;
    this.isEdit = true;
    this.selectedItem = this.dataApi.find((item) => item.id === id);
  }

  public onDelete(id: string): void {
    this.roleService.delete(id).subscribe((result) => {
      if (result) {
        console.log('Delete Success');
      }
      this.search();
    })
  }

  public onCancelDetail(): void {
    this.isShow = false;
    this.search();
  }

}
