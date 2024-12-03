import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { QuizDetailsComponent } from "./quiz-details/quiz-details.component";

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, QuizDetailsComponent],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css'
})
export class QuizListComponent implements OnInit {

  public apiURL: string = 'http://localhost:8080/api/manager/quizzes';
  public dataApi: any[] = [];

  //boolean
  public isShow: boolean = false;
  public isEdit: boolean = false;

  public selectedItem: any;

  // icon
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrash;
  public faPlus: IconDefinition = faPlus;

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
    this.isEdit = false;
    this.isShow = true;
  }

  public onEdit(id: string): void {
    this.isEdit = true;
    this.isShow = true;
    this.selectedItem = this.dataApi.find((item) => item.id === id);
  }

  public onDelete(id: string): void {
    this.http.delete(`${this.apiURL}/${id}`).subscribe((result) => {
      if (result) {
        console.log('Delete Success!');
      }
      this.search();
    });
  }

  public onCancelDetail(): void {
    this.isShow = false;
    this.search();
  }

}
