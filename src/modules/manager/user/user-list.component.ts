import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserDetailsComponent } from "./user-details.component";
import { USER_SERVICE } from '../../../constants/injection.constant';
import { IUserService } from '../../services/user/user.interface';
import { TableComponent } from "../../../core/components/table/table.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, UserDetailsComponent, TableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  public dataApi: any[] = [];
  public columns: any[] = [
    { name: 'firstName', title: 'First Name' },
    { name: 'lastName', title: 'Last Name' },
    { name: 'username', title: 'Username' },
    { name: 'phoneNumber', title: 'Phone' },
    { name: 'email', title: 'Email' },
    { name: 'thumbnailUrl', title: 'ThumbNail' },
    { name: 'active', title: 'Active' },
  ]

  public selectedItem: any;

  public isShow: boolean = false;
  public isEdit: boolean = false;

  constructor(@Inject(USER_SERVICE) private userService: IUserService) { }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    const param = {
      keyword: '',
    }
    this.userService.search(param).subscribe((data: any) => {
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
    this.userService.delete(id).subscribe((result) => {
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
