import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faPlus, IconDefinition, faE } from '@fortawesome/free-solid-svg-icons';
import { QuestionDetailsComponent } from "./question-details.component";

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, QuestionDetailsComponent],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit {

  // api control
  public apiURL: string = 'http://localhost:8080/api/manager/questions';
  public dataApi: any[] = [];

  public isShow: boolean = false;
  public isEdit: boolean = false;

  public selectedItem: any;

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
    this.isEdit = true;
    this.isShow = true;
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
