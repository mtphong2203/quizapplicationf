import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faEdit, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RoleDetailsComponent } from "./role-details/role-details.component";

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RoleDetailsComponent],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent implements OnInit {
  public apiURL: string = 'http://localhost:8080/api/manager/roles';
  public dataApi: any[] = [];

  public selectedItem: any;

  // boolean
  public isShow: boolean = true;
  public isEdit: boolean = false;

  public faPlus: IconDefinition = faPlus;
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrash;


  constructor(private http: HttpClient) { }
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
