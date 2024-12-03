import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserDetailsComponent } from "./user-details.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, UserDetailsComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  // api control
  public apiURL: string = 'http://localhost:8080/api/manager/users';
  public dataApi: any[] = [];

  public selectedItem: any;

  public isShow: boolean = false;
  public isEdit: boolean = false;

  // icon
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrash;
  public faPlus: IconDefinition = faPlus;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    this.http.get(this.apiURL).subscribe((data: any) => {
      this.dataApi = data;
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
    this.http.delete(`${this.apiURL}/${id}`).subscribe((result) => {
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
