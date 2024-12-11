import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoleDetailsComponent } from "./role-details/role-details.component";
import { ROLE_SERVICE } from '../../../constants/injection.constant';
import { IRoleService } from '../../services/role/role.interface';
import { TableComponent } from "../../../core/components/table/table.component";
import { Column } from '../../../models/type/column.model';
import { MasterListDtoComponent } from '../master-list-dto/master-list-dto.component';
import { RoleMasterDto } from '../../../models/role/role-master-dto.model';
import { ResponseDto } from '../../../models/response-dto.model';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RoleDetailsComponent, TableComponent],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent extends MasterListDtoComponent<RoleMasterDto> implements OnInit {

  public columns: Column[] = [
    { name: 'name', title: 'Name' },
    { name: 'description', title: 'Description' },
    { name: 'active', title: 'Active' },
  ]

  constructor(@Inject(ROLE_SERVICE) private roleService: IRoleService) { super() }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    const param = {
      keyword: ''
    }
    this.roleService.search(param).subscribe((data: ResponseDto<RoleMasterDto>) => {
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
