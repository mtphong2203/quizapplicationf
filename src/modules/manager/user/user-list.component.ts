import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserDetailsComponent } from "./user-details.component";
import { USER_SERVICE } from '../../../constants/injection.constant';
import { IUserService } from '../../services/user/user.interface';
import { TableComponent } from "../../../core/components/table/table.component";
import { Column } from '../../../models/type/column.model';
import { MasterListDtoComponent } from '../master-list-dto/master-list-dto.component';
import { UserMasterDto } from '../../../models/user/user-master-dto.model';
import { ResponseDto } from '../../../models/response-dto.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, UserDetailsComponent, TableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent extends MasterListDtoComponent<UserMasterDto> implements OnInit {

  public columns: Column[] = [
    { name: 'firstName', title: 'First Name' },
    { name: 'lastName', title: 'Last Name' },
    { name: 'username', title: 'Username' },
    { name: 'phoneNumber', title: 'Phone' },
    { name: 'email', title: 'Email' },
    { name: 'thumbnailUrl', title: 'ThumbNail' },
    { name: 'active', title: 'Active' },
  ]

  constructor(@Inject(USER_SERVICE) private userService: IUserService) { super() }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    const param = {
      keyword: '',
    }
    this.userService.search(param).subscribe((data: ResponseDto<UserMasterDto>) => {
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
    this.userService.delete(id).subscribe((result: boolean) => {
      if (result) {
        console.log('Delete success!');
      }
      this.search();
    });
  }

  public onCancelDetail(): void {
    this.isShow = false;
    this.search();
  }

}
