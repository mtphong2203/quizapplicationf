import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuizDetailsComponent } from "./quiz-details/quiz-details.component";
import { TableComponent } from "../../../core/components/table/table.component";
import { QUIZ_SERVICE } from '../../../constants/injection.constant';
import { IQuizService } from '../../services/quiz/quiz.interface';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, QuizDetailsComponent, TableComponent],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css'
})
export class QuizListComponent implements OnInit {

  public dataApi: any[] = [];
  public columns: any[] = [
    { name: 'title', title: 'Title' },
    { name: 'description', title: 'Description' },
    { name: 'duration', title: 'Duration' },
    { name: 'active', title: 'Active' },
  ]

  //boolean
  public isShow: boolean = false;
  public isEdit: boolean = false;

  public selectedItem: any;

  constructor(@Inject(QUIZ_SERVICE) private quizService: IQuizService) { }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    const param = {
      keyword: '',
    }
    this.quizService.search(param).subscribe((data: any) => {
      this.dataApi = data.data;
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
    this.quizService.delete(id).subscribe((result) => {
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
